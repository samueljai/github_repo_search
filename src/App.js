import React, { Component } from 'react';
import './CSS/App.css';
import SearchForm from './Components/SearchForm';
import Results from './Components/Results';

class App extends Component {
  state = {
    value: "",
  }

  render() {
    const { value } = this.state;

    return (
      <div className="App">
        <header>
          GitHub Repo Search
        </header>
        <main>
          <SearchForm getSearchValue={this.getSearchValue} />
          {value && <Results />}
        </main>
        <footer>
          <h6>Developed by:</h6>
          <h4>Samuel Jai</h4>
          <h6>Full Stack Developer</h6>
          <h4>© 2019</h4>
          <div className="socialLinks">
            <a href="https://github.com/samueljai" rel="noopener noreferrer" target="_blank"><img alt="github" src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI1MTQiIHdpZHRoPSI1MTQiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgaWQ9InN2Z18xIiBkPSJtMTI4LjEwMDAwNiwyMjIuMDcyOTk4IiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggc3Ryb2tlPSIjYWI5ODdhIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxMyIgZmlsbD0ibm9uZSIgaWQ9InN2Z18yIiBkPSJtMjYwLjkxMTEwMiw0ODAuNjA3NjM1YzE0NS4wMzI5NTksLTguMDcxMDc1IDI0Ni41NzQ0MzIsLTExOC4xMjE2NDMgMjIwLjY4ODY5LC0yNjQuMzQ4MDk5Yy0yMS4wNzUyODcsLTExOS4wNTg3MTYgLTEzNy43ODMxNDIsLTE5OC44MDEwMjcgLTI1NS44MTM5OTUsLTE4Mi44MzU3NzdjLTExOS42NTMyOSwxNi4xODMxMTcgLTIxMS42OTE3ODYsMTI2Ljk5NTk2NCAtMTk4LjA4NjM2OSwyNDcuNTQ1NTA5YzEyLjkwODgwMiwxMDguNTkxNDkyIDc5LjcwODI4NiwxNTkuMzU3NTEzIDEzNS40MzAxNjQsMTgyLjI4NjY4MmMxMi45NzIyOSw1LjMzOTA4MSAzMC40MDc5NDQsMTMuMTI2NjQ4IDM2LjI5ODQ0NywxMS44NjUwMjFjNS44OTA1NzksLTEuMjYxNTY2IDQuMDAwMzgxLC0zMy45MjI4MjEgNC4wMDAzODEsLTQ5LjY2NzkwOGMtMzYuMzA1MjY3LDUuNTc5NzQyIC00OC43Mjg0NywtOC43MTU2MzcgLTU2LjQ0MzM3NSwtMTcuMTYxMTAyYy04Ljc1MTgzMSwtOS41ODAwMTcgLTEzLjg5ODEzMiwtMTkuNDMwMjA2IC0yMi44MzM4MDEsLTMzLjg5NTQ3N3MtMjUuMTAyODE0LC0xMS4wNjE4MjkgLTI2LjgwNDU4MSwtMTkuNDMwMjA2czM0LjAzNjI0LC02LjA5OTI3NCA1OS43MDYzMTQsMjUuNTI3MTkxYzE4LjU3OTIwOCwyMy4wMjIwOTUgMzguNDExMDI2LDE2LjA4NTUxIDQ5LjA2ODg3OCw5LjUwMjgzOGMwLjM0OTQyNiwtMy42NTc2ODQgMS4xOTM1NTgsLTguNTY1NzY1IDMuMjYyOTM5LC0xNC4wNDEwMTZjMi4xOTQyMTQsLTUuODAyMDYzIDguMjI1NDY0LC05LjMxMjI4NiA3LjI3OTIwNSwtMTMuMjgzMTczYy0wLjk0NjEzNiwtMy45NzA4ODYgLTQ5LjQ3NTAyMSwtMS4zMDkzMjYgLTc3LjE0ODc3MywtNDAuMDg3OTIxYy0xOS45ODgzMTksLTI4LjAwOTQ5MSAtMjAuNzE0NDYyLC02MS4xNjMwODYgLTEyLjg1ODg3MSwtODUuODQ2MTQ2YzUuMjY4Nzk5LC0xNi41NTc1MSAxNC4wNTkyMzUsLTI4LjIzNDIwNyAyMC4wNDI4MTYsLTM0Ljk4MjQ4M2MtMi4yOTQwODMsLTQuOTA1NzAxIC01LjcwMjE5NCwtMTMuODYxNzcxIC01Ljg2MTA4NCwtMjUuNTI3MTE1Yy0wLjE3MjQ3LC0xMi41OTExODcgMy41MjYxOTksLTIyLjIyNzk2NiA1Ljg2MTA4NCwtMjcuMjI4OTg5YzcuOTIzNTg0LDAuMjM2MDA4IDE5LjM3Nzk0NSwxLjQ2MTI4OCAzMi4zMzQzOTYsNi4wNTE1OWMxMi40MDk2MDcsNC4zOTUyMzMgMjEuNzY3MjczLDEwLjMwNjIxMyAyNy45ODQ1NTgsMTQuOTM3MzkzYzExLjI4ODY5NiwtMy43OTE2MjYgMjcuNzIzNjc5LC03LjkxNjgwOSA0Ny44MzkwMiwtOC4zMjA3MjRjMjIuOTk3MjIzLC0wLjQ2MDYxNyA0MS42MjQwNTQsNC4xMjc0NzIgNTMuNzAyNDIzLDguMTMwMTU3YzUuOTM1OTc0LC01LjMwMDU4MyAxNS44NTQxMjYsLTEyLjgxNTc5NiAyOS44NzcwNDUsLTE3Ljk2NDI5NGMxMC4xODU4ODMsLTMuNzM5NTMyIDE5LjMyODAwMywtNS4wNTc4MzEgMjYuMDk0NDgyLC01LjQ4NDQzNmMyLjU5MzU2Nyw0LjkxMjU2NyA2Ljk3NzI5NSwxNC43OTIxMTQgNy4xODYxMjcsMjcuOTgyMzNjMC4xOTI4NDEsMTIuMTQxODc2IC0zLjIzNTY4NywyMS40ODgyMDUgLTUuNDgyMTc4LDI2LjQ2NjYxNGM2LjUwNTUyNCw3Ljg0ODY5NCAxNi43Nzc2NzksMjIuNDA3MTY2IDIxLjU2MDg4Myw0My4xMDEyMTJjMS43MDQxMDIsNy4zNzIxNzcgMTEuMDIwOTA1LDQ3LjYwNzQ5OCAtMTUuODc0NDUxLDgyLjIzMTUyMmMtMjguMTU0Nzg1LDM2LjI0NjMzOCAtNzUuMDE1OTYxLDMwLjY4NzA0MiAtNzcuMTMwNjQ2LDM1LjY5MjU2NmMtMi4xMTQ4MzgsNS4wMDU3MDcgOC45OTQ2MjksMTQuMjg4NDUyIDE0LjIxODAxOCwzMy43NTcyMzNjNS4yMjM0OCwxOS40Njg2MjggMy4wMTExMzksNTYuNjc5MzUyIDMuMDExMTM5LDU2LjY3OTM1MiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4=' /></a>
            <a href="https://www.linkedin.com/in/sam-desai" rel="noopener noreferrer" target="_blank"><img alt="LinkedIn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2wAAAdsBV+WHHwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALVSURBVEiJzddPbAxRHMDx72+6O223SFREaGL14C70QELogUTjIKKb1IUIlqDhRlcY/4oeRLRJoxLh4jA0iISDKAcSN4nEhQMtGn8XacjaP+/ngOl0O6uMLX63+eX93ue9l/dm3sA/CvnVhq7r2Na7bKMKjaAzFZn5rQMdABlATJ9OrrqdSDjZssC9Xam4iepelNXApDGafxTkYq7A/path5+Fgl3XseV97iCqrUDVWAMsioyonDBTovtKrUAg3NuVipuIXgbm/CZY3P19lfzKRPLYwJjw+dNt0+wC9xRm/RnqxZMKteev2uK89ict/8PVU04sUuBaGVGA+rxkr1w7ub2yJJwx2QMCc0eVCv1APqwsMP9zdJITCLun99QjbAuo62xOts8C3RQWBlDRHb1dqfgoWArGASoDaiwALVqdEFFlIuzzPAD3+M5qiVW/AWoCS4R+lDog8of4UE12aGpTa+cXC0BisWUlUQAlXgYUYOKn6ISl4C2fWVjSFEk2b24XNabByxnT0Ly5XUDXgxzKq6nPGlNrGVmgcPentGUtwjeLujDDf/iy8pzjOMaXuue6zYt5N/sqwvLgmZg6Pzw9DOw4jnF72uaI0bXAg9XJI2dFLhTc7tRGQfuBilEuMgO8HSuhdmxvVyouhjsgO0DOXDzVtgsgseXwC+BxUI2g4sEiDIaBNWqW4N+UyophQT4FwiqDHozq8zCwwRp57i0Jeg+MCLXk+TBsSV8YOFwUbnpwTWaoDxj6C+qHNOlbHtzU2vkFuDT+rlxKJnty4Pseu92pOhF9BMTGSf2cz+Vnt2zv8G0uvh8BpXucUETl5A90BAyQtt7uVrhVdlW5bqY82uNPjYCTyZ5cvoIWgadlZJ9UYK9LJC4USsIAaza2vzIRex5wswzoDY3YDcX3rUAYILHBSWut3YRIB5AJAWZE5ajW2isSG5x0UIP/70JfHOX+hfln8RXszBXAlB/8ZQAAAABJRU5ErkJggg==" /></a>
            <a href="https://twitter.com/thisissamueljai" rel="noopener noreferrer" target="_blank"><img alt="twitter" src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGlkPSJzdmdfMSIgZmlsbD0iI2FiOTg3YSIgZD0ibTQxNSwxNzcuNzIwOTkzYy0xMC42OTY5OTEsNC43NTQ5OSAtMjIuMjA5MDE1LDcuOTYxOTkgLTM0LjI4Nzk5NCw5LjM5NzAwM2MxMi4zMzMwMDgsLTcuMzgzMDExIDIxLjc5MDAwOSwtMTkuMDc5MDEgMjYuMjUsLTMzLjAyOTk5OWMtMTEuNTM2MDExLDYuODQ0OTg2IC0yNC4zMDYsMTEuODEzOTk1IC0zNy45MDg5OTcsMTQuNDk0OTk1Yy0xMC44ODYwMTcsLTExLjYwMDAwNiAtMjYuNDAzMDE1LC0xOC44NTQwMDQgLTQzLjU3Mjk5OCwtMTguODU0MDA0Yy0zMi45NjQwMiwwIC01OS42OTMwMjQsMjYuNzI3MDA1IC01OS42OTMwMjQsNTkuNjk5MDA1YzAsNC42NzIwMTIgMC41MjYwMDEsOS4yMjYwMTMgMS41NDgwMDQsMTMuNjAzMDEyYy00OS42MTU5OTcsLTIuNDkzMDExIC05My42MDg5OTQsLTI2LjI1NTAwNSAtMTIzLjA1Mjk5NCwtNjIuMzc0MDIzYy01LjEzODk5Miw4LjgxMjAxMiAtOC4wODA5OTQsMTkuMDY2MDEgLTguMDgwOTk0LDMwLjAxNzAxNGMwLDIwLjcwOSAxMC41Mzc5OTQsMzguOTg0MDA5IDI2LjU1Niw0OS42ODY5OTZjLTkuNzgxMDA2LC0wLjMxMjk4OCAtMTguOTkwMDA1LC0zIC0yNy4wNDEsLTcuNDcxOTg1Yy0wLjAwNTk5NywwLjI0Nzk4NiAtMC4wMDU5OTcsMC41MDE5OTkgLTAuMDA1OTk3LDAuNzU0OTljMCwyOC45MTg5OTEgMjAuNTc4OTk1LDUzLjA0MSA0Ny44OTA5OTEsNTguNTM0OTg4Yy01LjAwOTAwMywxLjM1OTAwOSAtMTAuMjgzMDA1LDIuMDkyMDEgLTE1LjcyOTAwNCwyLjA5MjAxYy0zLjg1MDk5OCwwIC03LjU5MDk4OCwtMC4zNzI5ODYgLTExLjIzNTAwMSwtMS4wNzUwMTJjNy42MDIwMDUsMjMuNzE1MDI3IDI5LjY0NjAxMSw0MC45ODEwMTggNTUuNzY0OTk5LDQxLjQ1ODAwOGMtMjAuNDMxLDE2LjAxMyAtNDYuMTY2LDI1LjU1OTAyMSAtNzQuMTM5OTk5LDI1LjU1OTAyMWMtNC44MTM5OTUsMCAtOS41NjksLTAuMjg0MDI3IC0xNC4yNDA5OSwtMC44MzkwMmMyNi40MjYwMDMsMTYuOTQ1OTg0IDU3LjgwMTk3OSwyNi44MjIwMjEgOTEuNTEyMDAxLDI2LjgyMjAyMWMxMDkuODEwOTg5LDAgMTY5Ljg1MjAwNSwtOTAuOTYzMDEzIDE2OS44NTIwMDUsLTE2OS44NTIwMmMwLC0yLjU4Nzk5NyAtMC4wNTMwMDksLTUuMTY3OTk5IC0wLjE2NTAwOSwtNy43MzEwMDNjMTEuNjU4OTk3LC04LjM5OTk5NCAyMS43ODIwMTMsLTE4LjkxODk5MSAyOS43Nzk5OTksLTMwLjg5MTk5OHoiLz4KICA8cGF0aCBpZD0ic3ZnXzIiIGZpbGw9IiNhYjk4N2EiIGQ9Im0yNTQuNSwxNi41Yy0xMzEuOTk2MDAyLDAgLTIzOSwxMDcuMDAzOTk4IC0yMzksMjM5czEwNy4wMDM5OTgsMjM5IDIzOSwyMzlzMjM5LC0xMDcuMDAzOTk4IDIzOSwtMjM5cy0xMDcuMDAzOTk4LC0yMzkgLTIzOSwtMjM5em0xNTguMzkxOTk4LDM5Ny4zOTE5OThjLTQyLjMwNzk4Myw0Mi4zMDgwMTQgLTk4LjU1ODk5LDY1LjYwODAwMiAtMTU4LjM5MTk5OCw2NS42MDgwMDJjLTU5LjgzMjk5MywwIC0xMTYuMDg0LC0yMy4yOTk5ODggLTE1OC4zOTE5OTgsLTY1LjYwODAwMmMtNDIuMzA4MDAyLC00Mi4zMDc5ODMgLTY1LjYwODAwMiwtOTguNTU4OTkgLTY1LjYwODAwMiwtMTU4LjM5MTk5OGMwLC01OS44MzI5OTMgMjMuMjk5OTk5LC0xMTYuMDg0IDY1LjYwODAwMiwtMTU4LjM5MTk5OGM0Mi4zMDc5OTksLTQyLjMwODAwMiA5OC41NTkwMDYsLTY1LjYwODAwMiAxNTguMzkxOTk4LC02NS42MDgwMDJjNTkuODMzMDA4LDAgMTE2LjA4NDAxNSwyMy4yOTk5OTkgMTU4LjM5MTk5OCw2NS42MDgwMDJjNDIuMzA4MDE0LDQyLjMwNzk5OSA2NS42MDgwMDIsOTguNTU5MDA2IDY1LjYwODAwMiwxNTguMzkxOTk4YzAsNTkuODMzMDA4IC0yMy4yOTk5ODgsMTE2LjA4NDAxNSAtNjUuNjA4MDAyLDE1OC4zOTE5OTh6Ii8+CiA8L2c+Cjwvc3ZnPg==' /></a>
          </div>
        </footer>
      </div>
    );
  }

  getSearchValue = (value) => {
    console.log('search value: ' + value);
    this.setState({ value })
  }


}

export default App;
