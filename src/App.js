import React, {useEffect, useState} from "react";
import {models} from "powerbi-client";
import {PowerBIEmbed} from "powerbi-client-react";
import './App.css';

function App() {

    const [responseConfig, setResponseConfig] = useState();
    const credentials = {
        'grant_type': 'client_credentials',
        'client_id': '31780722-345a-4e5a-89b3-55b71440d7f7',
        'client_secret': 'pp-8Q~nmX7lr2bw8-EBvQC0HZzukJWTT-sXvlbt8',
        'scope': 'api://31780722-345a-4e5a-89b3-55b71440d7f7/.default'
    }

    useEffect(() => {
        console.log("inside use effect calll")
        fetch('https://login.microsoftonline.com/d47495b0-5855-404f-a4cf-05689dbeeb21/oauth2/v2.0/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
            .then((response) => {
                console.log('response----->', response);
                setResponseConfig(response);
            })
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <h1>Power BI Embed: </h1>
                <PowerBIEmbed
                    embedConfig={{
                        hostname: "https://app.powerbigov.us/",
                        type: "report", // Supported types: report, dashboard, tile, visual and qna
                        id: '0f08a206-7b94-4e66-88ab-8c44ddb33df7',
                        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=0f08a206-7b94-4e66-88ab-8c44ddb33df7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUFVU1RSQUxJQS1FQVNULUEtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwUXVlcnlEYXRhU2FhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhUGFhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhRXhwb3J0VG8iOnRydWV9fQ%3d%3d',
                        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9',
                        tokenType: models.TokenType.Embed,
                        settings: {
                            panes: {
                                filters: {
                                    expanded: false,
                                    visible: false,
                                },
                                pageNavigation: {
                                    visible: false,
                                },
                            },
                            background: models.BackgroundType.Transparent,
                        },
                    }}
                    eventHandlers={
                        new Map([
                            [
                                "loaded",
                                function () {
                                    console.log("Report loaded");
                                },
                            ],
                            [
                                "rendered",
                                function () {
                                    console.log("Report rendered");
                                },
                            ],
                            [
                                "error",
                                function (event) {
                                    console.log(event.detail);
                                },
                            ],
                        ])
                    }
                    cssClassName={"report-style-class"}
                />
            </header>
        </div>
    );
}

export default App;
