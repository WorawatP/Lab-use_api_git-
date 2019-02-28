import React,{Component}from 'react'
import axios from 'axios'

class Github extends Component {

   state = { user: 'wwarodom', data:''}

   componentDidMount = () => this.fetchUser(this.state.user)

   componentWillReceiveProps = (nextprops) => {
    const { user } = nextprops;
    this.fetchUser(user);
   }

   fetchUser = (USER) => {
       axios.get(`https://api.github.com/users/${USER}`)
           .then(response => {
               this.setState({data: response.data})
               console.log(response.data)
           })
   }

   render() {
       const {data} = this.state
       if (data)
           return ( <div>{data.id}: {data.name} <img src={data.avatar_url} alt="avatar" width="100px"/> </div> )
       return (<div>.</div>);
   }
}

export default Github