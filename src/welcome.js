import {PowerBIEmbed} from 'powerbi-client-react';
import {models} from 'powerbi-client';
import './App.css';

function Welcome() {

    return (
        <div className="App">
            <header className="App-header">
                <PowerBIEmbed
                    embedConfig={{
                        type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                        id: '1488338f-a666-47fb-848e-ab334298e083',
                        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=1488338f-a666-47fb-848e-ab334298e083&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBRdWVyeURhdGFTYWFTRW1iZWQiOnRydWUsInNraXBRdWVyeURhdGFQYWFTRW1iZWQiOnRydWUsInNraXBRdWVyeURhdGFFeHBvcnRUbyI6dHJ1ZX19",
                        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNmZlY2QwNjUtY2IzMS00MWI0LTk4NWMtNjBmMmZkZjE3MjBmLyIsImlhdCI6MTY2NTY1NjM4MCwibmJmIjoxNjY1NjU2MzgwLCJleHAiOjE2NjU2NjA2NjIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF4ZUxHNjhJUkRLVHRFS21VWEN0elN6Z3R3SWF1UDV1UVpKNitlY2xqMUNUT3RWV1FkYVdDUVY1T1duUW5kc2xpIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjE4ZmJjYTE2LTIyMjQtNDVmNi04NWIwLWY3YmYyYjM5YjNmMyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiUG9ubnVzYW15IiwiZ2l2ZW5fbmFtZSI6IlNhcmFueWEiLCJpcGFkZHIiOiIxMDMuMTUzLjIyLjEzOSIsIm5hbWUiOiJTYXJhbnlhIFBvbm51c2FteSIsIm9pZCI6IjNjYTBmOTg0LTJhM2ItNDBlOS1hZGRiLWJjYjFiMDA2ZjllNiIsInB1aWQiOiIxMDAzMjAwMTU3RTA3RjIyIiwicmgiOiIwLkFSZ0FaZERzYnpITHRFR1lYR0R5X2ZGeUR3a0FBQUFBQUFBQXdBQUFBQUFBQUFBWUFEVS4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBQaXBlbGluZS5EZXBsb3kgUGlwZWxpbmUuUmVhZC5BbGwgUGlwZWxpbmUuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgUmVwb3J0LlJlYWRXcml0ZS5BbGwgU3RvcmFnZUFjY291bnQuUmVhZC5BbGwgU3RvcmFnZUFjY291bnQuUmVhZFdyaXRlLkFsbCBUZW5hbnQuUmVhZC5BbGwgVGVuYW50LlJlYWRXcml0ZS5BbGwgVXNlclN0YXRlLlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic3ViIjoiSEtaeTh3ejN4NktIbHpMN0Q1NzVBVm1yVlVSN3lhWmFXTFk4RmhlaE5QcyIsInRpZCI6IjZmZWNkMDY1LWNiMzEtNDFiNC05ODVjLTYwZjJmZGYxNzIwZiIsInVuaXF1ZV9uYW1lIjoic2FyYW55YS5wb25udXNhbXlAdGhvdWdodHdvcmtzLmNvbSIsInVwbiI6InNhcmFueWEucG9ubnVzYW15QHRob3VnaHR3b3Jrcy5jb20iLCJ1dGkiOiJoSFg5YXJFenlVeWlsdHJ4NzZvVUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.gdbMwe4Nge4-udpgcFW3HkE-TcO5bmZEgyOVw9dDE-L8jRxcaDml9Yeob-AAlJJhEvxq5R7UrK7_Zvz4sVRvalNwkeSDkyHonj2hthuKAyfqifDs5RLLPOx4QgTBzQkPMEcGJfR88J4ufe0hT2hJTLuKSxYtU2CeTXjkjLqD0F4kYbTLzRZznyoYtTc_9-97DvAjfy8-O1JuuSaq8SRP2Ri3nhsC66zjCmxpr6OlgTKq0Nne8wlJTcPC32MgQtMIqcRcYg9dbzdWea3BoqizpJDejicDAuDokwLwjJvFxQreR65LDFKU9WQNwg25uVVYfwLuf8bNqDKiGEpJtK-wqg',
                        tokenType: models.TokenType.Embed,
                        settings: {
                            panes: {
                                filters: {
                                    expanded: false,
                                    visible: false
                                }
                            },
                            background: models.BackgroundType.Transparent,
                        }
                    }}

                    eventHandlers={
                        new Map([
                            ['loaded', function () {
                                console.log('Report loaded');
                            }],
                            ['rendered', function () {
                                console.log('Report rendered');
                            }],
                            ['error', function (event) {
                                console.log(event.detail);
                            }]
                        ])
                    }

                    cssClassName={"report-style-class"}

                    getEmbeddedComponent = { (embeddedReport) => {
                        this.report = embeddedReport;
                    }}
                />
            </header>
        </div>
    );
}

export default Welcome;
