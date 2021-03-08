const utility = {
  // getJobs() { //   return Promise.all(this.getData('javascript', '1'), this.getData('react', '1'))
  //   .then(data => console.log('UTILITY', data))
  //   .catch(error => {
  //     console.log(error)
  //   })
  // },

  getData(search, page) {
    return fetch(`https://api.adzuna.com/v1/api/jobs/us/search/${page}?app_id=1a060a0c&app_key=4867681585b99bffc654ca5c4768c20c&results_per_page=20&what=${search}&content-type=application/json`)
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