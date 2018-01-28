CREATE TABLE post (
    Id        INT           PRIMARY KEY
                            UNIQUE
                            NOT NULL,
    Title     VARCHAR (250) NOT NULL,
    Content   VARCHAR,
    IsPrivate BOOLEAN       DEFAULT true
                            NOT NULL,
    IsLive    BOOLEAN       DEFAULT false
                            NOT NULL
);

CREATE TABLE postImage (
    FkPost  INT            REFERENCES post (Id) 
                           NOT NULL,
    Name    VARCHAR (300)  NOT NULL,
    Comment VARCHAR (1000) 
);

