import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';
const GithubContext = React.createContext()

const GithubProvider = ({children}) => {
  const [githubUser, setGithubUser] = useState(mockUser) 
  const [repos, setRepos] = useState(mockRepos) 
  const [followers, setFollowers] = useState(mockFollowers)
  
  const [requests, setRequests] =  useState(0)
  const [loading, setIsLoading] = useState(false)

  const [error, setError] =  useState({show: false, mg:""})
  const searchGithubUser =  async(user) => {
    toggleError()
    const response = await axios(`${rootUrl}/users/${user}`).catch(err => console.log(err))
    console.log(response);
    if(response) {
      setGithubUser(response.data)
    } else {
      toggleError(true,'there is no user with that username')
    }
  }

  //cek limit
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
    .then(({data}) => {
      let {rate:{remaining}} = data
      setRequests(remaining)
      if(remaining === 0){
        toggleError(true, "you excedeed API request limit")
      }
    })
    .catch((error) => console.log(error))
  }

  //*ditrigger dari if di cek limit
  function toggleError(show = false, msg = "") {
    setError({show, msg})
  }

  useEffect(checkRequests, [])

  return (
    <GithubContext.Provider 
    value={{
      githubUser,
      repos,
      followers, 
      requests, 
      error,
      searchGithubUser}}>{children}
    </GithubContext.Provider>
  )
}

export {GithubProvider,GithubContext}