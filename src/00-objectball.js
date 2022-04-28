let exApp = new ActiveXObject("Excel.Application");
let excelFile=exApp.Workbooks.Open("\\wsl.localhost\Ubuntu\root\Development\code\phase-1\phase-1-object-ball\basketballPlayerData.xlsx");
let sheetHome = excelFile.Worksheets("home");


const gameObject = {
    "home": {
        "teamNames": "Brooklyn Nets",
        "colors": ["Black", "White"],
        "players": {
            "Alan Anderson": {
                "numbers": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1
            },
            "Reggie Evans": {
                "numbers": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7
            }

        }
    },
    "away": {
        "teamNames": "",
        "colors": [],
        "players": ""

    }
}

