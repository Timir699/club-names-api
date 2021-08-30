const sportsDataLoad = () => {
    const search = document.getElementById('input')
    let searchText = search.value;

    console.log(searchText)
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(json => sportsDataShow(json))
    search.value = ''
}
const sportsDataShow = (team) => {
    const teams = team.teams
    const result = document.getElementById('card')
    result.textContent = ''
    teams.forEach(team => {
        const league = team.strLeague
        const fullName = team.strTeam
        const year = team.intFormedYear
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div class="card" style = "width: 18rem;">
            <img src="" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Full Name: ${fullName}</h5>
                    <h4>Founding Year : ${year} </h4>
                    <h6>league : ${league} </h6>
                </div>
            </div>
        `
        result.appendChild(div)

    })







}