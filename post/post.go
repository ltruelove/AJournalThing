package post

import (
	//"database/sql"
	//"encoding/json"
	//"fmt"
	//"github.com/gorilla/mux"
	"github.com/ltruelove/AJournalThing/database"
	_ "github.com/mattn/go-sqlite3"
	//"os"
	//"html/template"
	//"io/ioutil"
	"net/http"
)

type Post struct {
	Id        int
	Title     string
	Content   string
	IsPrivate bool
	IsLive    bool
}

func PostListHandler(w http.ResponseWriter, r *http.Request) {

	rows, err := database.DBCon.Query(`SELECT 
    Id,
    Title,
    Content,
    IsPrivate,
    IsLive
     FROM post`)

	if err != nil {
		panic(err)
	}

	rows.Close()
}
