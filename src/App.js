import React, { Component } from 'react';
import './CSS/App.css';
import SearchForm from './Components/SearchForm';
import Results from './Components/Results';

class App extends Component {
  state = {
    searchValue: "",
  }

  render() {
    const { searchValue } = this.state;

    return (
      <div className="App">
        <header>
          <h1>GitHub Repo Search</h1>
        </header>
        <main>
          <SearchForm getSearchValue={this.getSearchValue} />
          {searchValue ? <Results searchValue={searchValue} />
            :
            <div className="repoResults">
              <img className="landingImg" src="https://github.githubassets.com/images/modules/explore/social.jpg" alt="landing_page_image" />
            </div>
          }
        </main>
        <footer>
          <h6>Developed by:</h6>
          <h4>Samuel Jai</h4>
          <h6>Full Stack Developer</h6>
          <h4>© 2019</h4>
          <div className="socialLinks">
            <a href="https://github.com/samueljai" rel="noopener noreferrer" target="_blank"><img alt="github" src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgaWQ9InN2Z18xIiBkPSJtMTI4LjEwMDAwNiwyMjIuMDcyOTk4IiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggc3Ryb2tlPSIjZmVkYTZhIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4IiBmaWxsPSJub25lIiBpZD0ic3ZnXzIiIGQ9Im0xMzAuMzkxOTk4LDI1MS41NjM3ODJjNzcuNzY1NzMyLC00LjQzMTUzNCAxMzIuMjExNjA5LC02NC44NTU3NzQgMTE4LjMzMTg5NCwtMTQ1LjE0MjgxNWMtMTEuMzAwNDMsLTY1LjM3MDM0MiAtNzMuODc4NDk0LC0xMDkuMTUzNjQ0IC0xMzcuMTY1ODg2LC0xMDAuMzg3NzYyYy02NC4xNTczNDEsOC44ODU0OTQgLTExMy41MDc4MTIsNjkuNzI4MzY5IC0xMDYuMjEyNjczLDEzNS45MTcyMzRjNi45MjE2MjQsNTkuNjIzMTg0IDQyLjczOTEwMSw4Ny40OTY4MjYgNzIuNjE2ODA5LDEwMC4wODYyODhjNi45NTU3MDQsMi45MzE0ODggMTYuMzA0NTczLDcuMjA3MjYgMTkuNDYzMDM2LDYuNTE0NTg3YzMuMTU4NDcsLTAuNjkyNzE5IDIuMTQ0OTc0LC0xOC42MjU2MjYgMi4xNDQ5NzQsLTI3LjI3MDY0NWMtMTkuNDY2NjY3LDMuMDYzNTUzIC0yNi4xMjc5MjIsLTQuNzg1Mzg1IC0zMC4yNjQ1OTUsLTkuNDIyNDdjLTQuNjkyNjk2LC01LjI2MDAyNSAtNy40NTIwOTUsLTEwLjY2ODMzNSAtMTIuMjQzMzM2LC0xOC42MTA2NzJzLTEzLjQ1OTk5MSwtNi4wNzM1NjMgLTE0LjM3MjQ5NCwtMTAuNjY4MzA0czE4LjI1MDAxOSwtMy4zNDg4NjIgMzIuMDE0MTgzLDE0LjAxNTk3NmM5Ljk2MjA2NywxMi42NDA0ODggMjAuNTk1NzQxLDguODMxODYzIDI2LjMxMDQzMiw1LjIxNzYzNmMwLjE4NzM2MywtMi4wMDgzMzEgMC42Mzk5NjEsLTQuNzAzMTI1IDEuNzQ5NTczLC03LjcwOTM4MWMxLjE3NjUwNiwtMy4xODU2NjkgNC40MTA0MTYsLTUuMTEzMDM3IDMuOTAzMDY5LC03LjI5MzI3NGMtMC41MDczNDcsLTIuMTgwMjY3IC0yNi41MjgyMjEsLTAuNzE4ODU3IC00MS4zNjY2OTksLTIyLjAxMDY1MWMtMTAuNzE3NjI4LC0xNS4zNzg5MDYgLTExLjEwNjk2LC0zMy41ODIxNjkgLTYuODk0ODU5LC00Ny4xMzQ2NTFjMi44MjUxMDQsLTkuMDkxMDU3IDcuNTM4NDc1LC0xNS41MDIyNTEgMTAuNzQ2ODM0LC0xOS4yMDc0NTFjLTEuMjMwMDU3LC0yLjY5MzU1IC0zLjA1NzQ5NSwtNy42MTA5NyAtMy4xNDI2NTQsLTE0LjAxNTkzYy0wLjA5MjQ3NiwtNi45MTMzIDEuODkwNjk0LC0xMi4yMDQ0NjggMy4xNDI2NTQsLTE0Ljk1MDMzM2M0LjI0ODU5NiwwLjEyOTU2MiAxMC4zOTAzNDMsMC44MDIzMjIgMTcuMzM3NTE3LDMuMzIyNzA4YzYuNjUzOTQ2LDIuNDEzMjIzIDExLjY3MTQ3OCw1LjY1ODY5OSAxNS4wMDUxNSw4LjIwMTVjNi4wNTI5MjUsLTIuMDgxODQxIDE0Ljg2NTI1LC00LjM0NjgwOSAyNS42NTEwMDksLTQuNTY4NTczYzEyLjMzMDkxNywtMC4yNTI5MTQgMjIuMzE4NTQyLDIuMjY2MjI4IDI4Ljc5NDg3Niw0LjQ2MzkyMWMzLjE4MjgsLTIuOTEwMzMyIDguNTAwODU0LC03LjAzNjYyOSAxNi4wMTk4NjcsLTkuODYzNDg3YzUuNDYxNjI0LC0yLjA1MzE2OSAxMC4zNjM1NTYsLTIuNzc3MDIzIDEzLjk5MTY4NCwtMy4wMTEyMzhjMS4zOTA2NTYsMi42OTcyODkgMy43NDEyNDEsOC4xMjE3NTggMy44NTMxNjUsMTUuMzYzOTZjMC4xMDM0MzksNi42NjY1OTUgLTEuNzM0OTcsMTEuNzk4Mjk0IC0yLjkzOTQ2OCwxNC41MzE3MTVjMy40ODgyMDUsNC4zMDk0MzMgOC45OTYwNzgsMTIuMzAyODg3IDExLjU2MDc2LDIzLjY2NTEzOGMwLjkxMzc0Miw0LjA0Nzc5MSA1LjkwOTM2MywyNi4xMzk0MTIgLTguNTExNzk1LDQ1LjE1MDAwMmMtMTUuMDk2NDA1LDE5LjkwMTM4MiAtNDAuMjIzMDM4LDE2Ljg0OTA0NSAtNDEuMzU2OTQ5LDE5LjU5NzM4MmMtMS4xMzM5NTcsMi43NDgzODMgNC44MjI4NjEsNy44NDUyMyA3LjYyMzYyNywxOC41MzQ3MTRjMi44MDA3NjYsMTAuNjg5NDY4IDEuNjE0NTMyLDMxLjEyMDM2MSAxLjYxNDUzMiwzMS4xMjAzNjEiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+' /></a>
            <a href="https://www.linkedin.com/in/sam-desai" rel="noopener noreferrer" target="_blank"><img alt="LinkedIn" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIyNTgiIHdpZHRoPSIyNTgiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIHN0cm9rZT0ibnVsbCIgaWQ9InN2Z18xIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlZGE2YSIgZD0ibTE5OS40NDg4ODMsMTg4LjExNDgzOGwwLC00OS42MjMxOTljMCwtMjYuNTg2ODg0IC0xNC4yMjA3MTgsLTM4Ljk1ODc4NiAtMzMuMTc4ODAyLC0zOC45NTg3ODZjLTE1LjI5ODkzNSwwIC0yMi4xNTQ1ODcsOC40MDE4NzEgLTI1Ljk3NTA4MiwxNC4yOTU0NzlsMCwtMTIuMjYxNzQybC0yOC44MjM0NDgsMGMwLjM4MjA1LDguMTIyMjM4IDAsODYuNTQ4MjQ4IDAsODYuNTQ4MjQ4bDI4LjgyMzQ0OCwwbDAsLTQ4LjMzNTE1OWMwLC0yLjU4MDMyMiAwLjE4Njc5OCwtNS4xNjQ4NzEgMC45NTA4OTcsLTcuMDEyMTc3YzIuMDgwMDQ4LC01LjE2OTA4MyA2LjgyMTcwMSwtMTAuNTIwMzQ4IDE0Ljc4MTA1MiwtMTAuNTIwMzQ4YzEwLjQzNDE3NCwwIDE0LjYwMjczNyw3LjkzNTgxNCAxNC42MDI3MzcsMTkuNTY2MjQ2bDAsNDYuMzA1NjQ5bDI4LjgxOTE5OSwwbDAsLTAuMDA0MjExem0tMTE4LjM0MTcxMywtOTguMzYwODYzYzEwLjA0Nzg4MiwwIDE2LjMwOTIzNSwtNi42NTIwMjMgMTYuMzA5MjM1LC0xNC45NjA2ODZjLTAuMTg2Nzc1LC04LjQ4NjYyNiAtNi4yNjEzNTMsLTE0Ljk0Nzk2OCAtMTYuMTE4MjEsLTE0Ljk0Nzk2OHMtMTYuMzA0OTc3LDYuNDU3MSAtMTYuMzA0OTc3LDE0Ljk0Nzk2OGMwLDguMzA4NjYyIDYuMjU3MTAzLDE0Ljk2MDY4NiAxNS45MzE0MjcsMTQuOTYwNjg2bDAuMTgyNTI2LDB6bTQ2Ljg2ODg4OSwxNjUuNTcxNjMyYy03MC4zMzA5MTQsMCAtMTI3LjM0OTU1MywtNTYuOTEwNzUxIC0xMjcuMzQ5NTUzLC0xMjcuMTA4NTk3YzAsLTcwLjIwMjA2NSA1Ny4wMTg2MzksLTEyNy4xMDg1NzcgMTI3LjM0OTU1MywtMTI3LjEwODU3N3MxMjcuMzQ5NTY0LDU2LjkwNjUxMyAxMjcuMzQ5NTY0LDEyNy4xMDg1NzdjMCw3MC4xOTc4NDUgLTU3LjAxODYzMSwxMjcuMTA4NTk3IC0xMjcuMzQ5NTY0LDEyNy4xMDg1OTd6bS0zMi40NTcxNjEsLTY3LjIxMDc3bDAsLTg2LjU0ODI0OGwtMjguODE5MjA2LDBsMCw4Ni41NDgyNDhsMjguODE5MjA2LDB6Ii8+CiA8L2c+Cjwvc3ZnPg==" /></a>
            <a href="https://twitter.com/thisissamueljai" rel="noopener noreferrer" target="_blank"><img alt="twitter" src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIyNTgiIHdpZHRoPSIyNTgiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxnIHN0cm9rZT0ibnVsbCIgaWQ9InR3aXR0ZXIiPgogICA8cGF0aCBzdHJva2U9Im51bGwiIGlkPSJzdmdfMSIgZmlsbD0iI2ZlZGE2YSIgZD0ibTIxMy4xNjkzNzMsODYuODc4MTk3Yy01LjY5MjgxLDIuNTMwNTQgLTExLjgxOTM4Miw0LjIzNzI4MiAtMTguMjQ3NjgxLDUuMDAwOTc3YzYuNTYzNTA3LC0zLjkyOTE2MSAxMS41OTYzOSwtMTAuMTUzNjMzIDEzLjk2OTk0LC0xNy41NzgxNzhjLTYuMTM5MzI4LDMuNjQyODIyIC0xMi45MzUzNDksNi4yODcyNyAtMjAuMTc0NzEzLDcuNzE0MDY2Yy01Ljc5MzQxMSwtNi4xNzMzODYgLTE0LjA1MTM2MSwtMTAuMDMzODc1IC0yMy4xODkwMjYsLTEwLjAzMzg3NWMtMTcuNTQzMDMsMCAtMzEuNzY3ODk5LDE0LjIyMzc5MyAtMzEuNzY3ODk5LDMxLjc3MTA5NWMwLDIuNDg2MzgyIDAuMjc5OTM4LDQuOTA5OTU4IDAuODIzODIyLDcuMjM5MzQ5Yy0yNi40MDUwMjksLTEuMzI2NzQ0IC00OS44MTc1NzQsLTEzLjk3MjU4OCAtNjUuNDg3MzEyLC0zMy4xOTQ2ODdjLTIuNzM0OTA5LDQuNjg5NjI5IC00LjMwMDYxMywxMC4xNDY2OTggLTQuMzAwNjEzLDE1Ljk3NDY3YzAsMTEuMDIxMDg4IDUuNjA4MiwyMC43NDY4MTkgMTQuMTMyNzgyLDI2LjQ0MjgzM2MtNS4yMDUzMjIsLTAuMTY2NTczIC0xMC4xMDYyNDcsLTEuNTk2NTczIC0xNC4zOTA4OTIsLTMuOTc2NTAxYy0wLjAwMzE4OSwwLjEzMTk3MyAtMC4wMDMxODksMC4yNjcxNTEgLTAuMDAzMTg5LDAuNDAxNzk0YzAsMTUuMzkwMzM1IDEwLjk1MTg5NywyOC4yMjc3NjggMjUuNDg3MDA3LDMxLjE1MTYxMWMtMi42NjU3MzMsMC43MjMyNTEgLTUuNDcyNDgxLDEuMTEzMzQyIC04LjM3MDc4OSwxLjExMzM0MmMtMi4wNDk0NDYsMCAtNC4wMzk4MzMsLTAuMTk4NTAyIC01Ljk3OTEyNiwtMC41NzIxMTNjNC4wNDU3LDEyLjYyMDg2NSAxNS43NzcyNDUsMjEuODA5NjAxIDI5LjY3NzQ2LDIyLjA2MzQ0NmMtMTAuODczMTM4LDguNTIxOTEyIC0yNC41Njg5OTMsMTMuNjAyMTg4IC0zOS40NTY0MTMsMTMuNjAyMTg4Yy0yLjU2MTk1OCwwIC01LjA5MjUxLC0wLjE1MTE1NCAtNy41Nzg4OTIsLTAuNDQ2NDg3YzE0LjA2MzYxOCw5LjAxODQzMyAzMC43NjE1MTcsMTQuMjc0MzUzIDQ4LjcwMTU4OCwxNC4yNzQzNTNjNTguNDQwMDk0LDAgOTAuMzkzMTg4LC00OC40MDk0MDkgOTAuMzkzMTg4LC05MC4zOTMxOTZjMCwtMS4zNzczMDQgLTAuMDI4MTk4LC0yLjc1MDM0MyAtMC4wODc4MTQsLTQuMTE0MzQyYzYuMjA0NzczLC00LjQ3MDM5IDExLjU5MjE0OCwtMTAuMDY4NDY2IDE1Ljg0ODU3MiwtMTYuNDQwMzQ2eiIvPgogICA8cGF0aCBzdHJva2U9Im51bGwiIGlkPSJzdmdfMiIgZmlsbD0iI2ZlZGE2YSIgZD0ibTEyNy43NTMxODksMS4wNzgzMjhjLTcwLjI0NjY3NywwIC0xMjcuMTkyOTIyLDU2Ljk0NjIzNSAtMTI3LjE5MjkyMiwxMjcuMTkyODk3czU2Ljk0NjI0NSwxMjcuMTkyOTE3IDEyNy4xOTI5MjIsMTI3LjE5MjkxN3MxMjcuMTkyOTMyLC01Ni45NDYyMTMgMTI3LjE5MjkzMiwtMTI3LjE5MjkxN3MtNTYuOTQ2MjQzLC0xMjcuMTkyODk3IC0xMjcuMTkyOTMyLC0xMjcuMTkyODk3em04NC4yOTQzMjcsMjExLjQ4NzIwOGMtMjIuNTE1ODA4LDIyLjUxNTgzOSAtNTIuNDUxOTM1LDM0LjkxNTc4NyAtODQuMjk0MzI3LDM0LjkxNTc4N2MtMzEuODQyMzg0LDAgLTYxLjc3ODQ5NiwtMTIuMzk5OTQ4IC04NC4yOTQzMTIsLTM0LjkxNTc4N2MtMjIuNTE1ODA4LC0yMi41MTU3OTMgLTM0LjkxNTc5MSwtNTIuNDUxODg5IC0zNC45MTU3OTEsLTg0LjI5NDMxMmMwLC0zMS44NDIzNzcgMTIuMzk5OTgyLC02MS43Nzg0ODggMzQuOTE1NzkxLC04NC4yOTQyODljMjIuNTE1ODE2LC0yMi41MTU4MDggNTIuNDUxOTI3LC0zNC45MTU3ODkgODQuMjk0MzEyLC0zNC45MTU3ODljMzEuODQyMzkyLDAgNjEuNzc4NTE5LDEyLjM5OTk4MSA4NC4yOTQzMjcsMzQuOTE1Nzg5YzIyLjUxNTgwOCwyMi41MTU4IDM0LjkxNTc4Nyw1Mi40NTE5MTIgMzQuOTE1Nzg3LDg0LjI5NDI4OWMwLDMxLjg0MjQyMiAtMTIuMzk5OTc5LDYxLjc3ODUxOSAtMzQuOTE1Nzg3LDg0LjI5NDMxMnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==' /></a>
          </div>
        </footer>
      </div>
    );
  }

  getSearchValue = (searchValue) => {
    this.setState({ searchValue })
  }
}

export default App;
