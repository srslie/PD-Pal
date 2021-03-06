import { defaultFieldResolver } from "graphql";

const utility = {
  getData() {
    return fetch('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1a060a0c&app_key=4867681585b99bffc654ca5c4768c20c&results_per_page=20&what=javascript%20developer&content-type=application/json')
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
      title: listing.title.split('<strong>').join('').split('</strong>').join('') || 'None Given',
      location: listing.location.display_name || 'None Given',
      url: listing.redirect_url || 'None Given',
      description: listing.description || 'None Given'
    }
  }

}

export default utility;