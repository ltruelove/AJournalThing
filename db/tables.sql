CREATE TABLE post (
    Id        INTEGER       PRIMARY KEY
                            UNIQUE
                            NOT NULL,
    Title     VARCHAR (250) NOT NULL,
    Content   VARCHAR,
    IsPrivate INTEGER       DEFAULT (1) 
                            NOT NULL,
    IsLive    INTEGER       DEFAULT (0) 
                            NOT NULL
);

CREATE TABLE postImage (
    FkPost  INTEGER        REFERENCES post (Id) 
                           NOT NULL,
    Name    VARCHAR (300)  NOT NULL,
    Comment VARCHAR (1000) 
);
