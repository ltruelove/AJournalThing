package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/ltruelove/AJournalThing/database"
	"github.com/ltruelove/AJournalThing/post"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"os"
	"time"
	//"html/template"
	//"io/ioutil"
	"net/http"
	//"strings"
)

type Configs struct {
	DbPath string
}

func main() {
	file, err := os.Open("config.json")
	if err != nil {
		fmt.Println(err)
	}

	configuration := Configs{}
	decoder := json.NewDecoder(file)
	err = decoder.Decode(&configuration)

	if err != nil {
		fmt.Println(err)
	}

	//fmt.Println(configuration.DbPath)

	var dbErr error
	database.DBCon, dbErr = sql.Open("sqlite3", configuration.DbPath)

	if dbErr != nil {
		panic(err)
	}

	defer database.DBCon.Close()

	r := mux.NewRouter()
	post.RegisterPostRoutes(r)

	srv := &http.Server{
		Handler:      r,
		Addr:         "127.0.0.1:8000",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Fatal(srv.ListenAndServe())
}
