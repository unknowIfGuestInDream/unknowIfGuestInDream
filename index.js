const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)

function isZero(x) {
  return x < 10 ? '0' + x : x
}

function formatDate(time) {
  const y = time.getFullYear();
  const m = time.getMonth() + 1;
  let d = time.getDate();
  const h = time.getHours();
  const mm = time.getMinutes();
  const s = time.getSeconds();
  return y + '/' + isZero(m) + '/' + isZero(d) + ' ' + isZero(h) + ':' + isZero(mm) + ':' + isZero(s);
}

const readme = `\
### Hi there 👋
### I'm Tang Liang. 

- 🔭 I’m currently working on Java development
- 🌱 I’m currently learning Japanese
- 🤔 My blog 👉 https://www.tlcsdm.com 
- 📫 How to reach me: tang97155@gmail.com
- ⏰ Updated on ${formatDate(new Date())}

---

<p align="center">
<img src="https://img.shields.io/badge/-java-E34A86?style=flat-square&logo=OpenJDK"/>
<img src="https://img.shields.io/badge/-JavaScript-blue?style=flat-square&logo=javascript"/>
<img src="https://img.shields.io/badge/-React-lightgrey?style=flat-square&logo=react"/>
<img src="https://img.shields.io/badge/-Go-E34A86?style=flat-square&logo=Go"/>
<img src="https://img.shields.io/badge/-Python-E34A86?style=flat-square&logo=Python"/>
</p>

<p align="center">
<img src="https://img.shields.io/badge/-SpringBoot-yellowgreen?style=flat-square&logo=Spring Boot"/>
<img src="https://img.shields.io/badge/-SpringCloud-yellowgreen?style=flat-square&logo=Spring"/>
<img src="https://img.shields.io/badge/-Oracle-important?style=flat-square&logo=Oracle"/>
<img src="https://img.shields.io/badge/-MySQL-white?style=flat-square&logo=mysql"/>
<img src="https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb"/>
<img src="https://img.shields.io/badge/-Redis-green?style=flat-square&logo=Redis"/>
<img src="https://img.shields.io/badge/-Git-blue?style=flat-square&logo=git"/>
<img src="https://img.shields.io/badge/-GitHub-orange?style=flat-square&logo=github"/>
<img src="https://img.shields.io/badge/-CentOS-informational?style=flat-square&logo=CentOS"/>
</p>

<p align="center">
<img src="https://img.shields.io/badge/-Idea-black?style=plastic&logo=intellijidea"/>
<img src="https://img.shields.io/badge/-Webstorm-red?style=plastic&logo=webstorm"/>
<img src="https://img.shields.io/badge/-Eclipse-orange?style=flat-square&logo=Eclipse IDE"/>
<img src="https://img.shields.io/badge/-DataGrip-green?style=flat-square&logo=datagrip"/>
<img src="https://img.shields.io/badge/-GoLand-black?style=flat-square&logo=goland"/>
<img src="https://img.shields.io/badge/-PyCharm-yellowgreen?style=flat-square&logo=PyCharm"/>
</p>

<p align = "center">
  <img width="49%" src = "https://github-readme-stats.vercel.app/api?username=unknowIfGuestInDream&count_private=true&show_icons=true&theme=tokyonight">
  <img width="49%" src="https://github-readme-streak-stats.herokuapp.com/?user=unknowIfGuestInDream&show_icons=true&locale=en&layout=compact&theme=tokyonight&date_format=[Y.]n.j" />
</p>

<p align = "center">

</p>

<p align = "center">
 <img src="https://activity-graph.herokuapp.com/graph?username=unknowIfGuestInDream&theme=redical">
</p>
\
`

console.log(readme)
