import { defaultFieldResolver } from "graphql";

const utility = {
  // getJobs() {
  //   return Promise.all(this.getData('javascript', '1'), this.getData('react', '1'))
  //   .then(data => console.log('UTILITY', data))
  //   .catch(error => {
  //     console.log(error)
  //   })
  // },

  getData(search, page) {
    return fetch(`https://api.adzuna.com/v1/api/jobs/us/search/${page}?app_id=a7e24f78&app_key=2b388189b4767ec893bfecd41687c4e8&results_per_page=20&what=${search}&content-type=application/json`)
    .then(response => response.json())
    .then(jobs => jobs.results.map(job => this.cleanData(job)))
    .catch(error => {
      console.log(error)
    })
  },

  cleanData(listing) {
    return {
      id: listing.id || Date.now(),
      company: listing.company.display_name || 'None Given',
      title: this.removeFormating(listing.title) || 'None Given',
      location: listing.location.display_name || 'None Given',
      url: listing.redirect_url || 'None Given',
      description: this.removeFormating(listing.description) || 'None Given', 
      created: listing.created.split('T')[0] || 'None Given'
    }
  },

  removeFormating(text) {
    return text.replaceAll('<strong>', '').replaceAll('</strong>', '') 
  }

}

export default utility;