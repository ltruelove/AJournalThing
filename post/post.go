package post

import (
	//"database/sql"
	"encoding/json"
	//"fmt"
	"github.com/gorilla/mux"
	"github.com/ltruelove/AJournalThing/database"
	_ "github.com/mattn/go-sqlite3"
	//"os"
	//"html/template"
	//"io/ioutil"
	"net/http"
)

type JournalPost struct {
	Id        int
	Title     string
	Content   string
	IsPrivate bool
	IsLive    bool
}

type PostList []JournalPost

func RegisterPostRoutes(r *mux.Router) {
	r.HandleFunc("/post", PostListHandler).Methods("GET")
}

func PostListHandler(w http.ResponseWriter, r *http.Request) {

	rows, err := database.DBCon.Query(`SELECT 
    Id,
    Title,
    Content,
    IsPrivate,
    IsLive
    FROM post
    ORDER BY Id DESC`)

	if err != nil {
		panic(err)
	}

	var results = PostList{}

	for rows.Next() {
		var result = JournalPost{}
		err := rows.Scan(&result.Id, &result.Title, &result.Content, &result.IsPrivate, &result.IsLive)

		if err != nil {
			panic(err)
		}

		results = append(results, result)
	}

	rows.Close()

	jData, err := json.Marshal(results)
	if err != nil {
		panic(err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(jData)

	//json.NewEncoder(w).Encode(rows)
}
