import React,{useState,useEffect} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import '../css/chat.css'
import InfoBar from './InfoBar/InfoBar'
import Input from './Input/Input'
import Messages from './Messages'

// let socket;
// const Chat = ({location}) => {
//     const [messages,setMessages] = useState([]);
//     const [message,setMessage] =useState('');
   
//     const [name,setName] = useState('');
//     const [room,setRoom] = useState('');
     //const ENDPOINT = 'https://gosrahul-react-chat.herokuapp.com/';

  const ENDPOINT ='localhost:5000'
    
  

//     useEffect(()=>{
//         const data = queryString.parse(location.search);
//         console.log(location.search);
//         console.log(data);
//         setName(data.name);
//         setRoom(data.room);
        
       
//         socket= io(ENDPOINT);
//         socket.emit('join',{name:data.name,room:data.room},(cb)=>{
//            alert(cb)
//         });

//         socket.on('message',(msg)=>{
//             const msgs=messages
//             msgs.push(msg);
//             console.log(msgs)
//           setMessages(msgs)
//         });
      


//         return  ()=>{
//             socket.emit("disconnect");

//             alert("disconnected");
//             socket.off()
//         }
//     },[ENDPOINT,location.search]);

// useEffect(()=>{
          
         
          
//       },[]);
   

    
//     //function for sending messages
//     const sendMessage=(event)=>{
//         event.preventDefault();
       
      
//         if(message){
//             socket.emit('sendMessage',message,()=>{setMessage('');});
//         }
//     }

//     return (
        
//       <div className="outerContainer">
//           <div class="container">
//          <InfoBar room={room}/>
//          <Messages messages={messages} name={name}/>
//               {/* <input
//               value={message}
//               onChange={(e)=>setMessage(e.target.value)}
//               onKeyPress={(e)=>e.key==='Enter'?sendMessage(e):null}
//               /> */}
//               <Input 
//               message={message}
//               sendMessage={sendMessage}
//               setMessage={setMessage}
//               />
         
//           </div>
//       </div>
//     )
// }



class Chat extends React.Component{
    state={messages:[],message:"",room:"",name:"",typeMessages:""}
    socket=io(ENDPOINT);

    constructor(props){
        super()
        const data = queryString.parse(props.location.search)
        this.socket.emit('join',{name:data.name,room:data.room},(cb)=>{
            alert(cb);
            this.setState({name:data.name,room:data.room})
         });
 
         
    }

    componentDidMount(){
        console.log("mounted")


        this.socket.on('message',(msg)=>{
            const msgs=this.state.messages
            msgs.push(msg);
            console.log(msgs)
          this.setState({messages:msgs});
        });


        this.socket.on('showType',(message)=>{
            this.setState({typeMessages:message});
        })

        this.socket.on('typeStop',()=>{
            console.log("type messages")
            this.setState({typeMessages:""})
        })
      
    }

    componentWillUnmount(){
        this.socket.emit("disconnect");

        alert("disconnected");
        this.socket.off()
    } 


    sendMessage= (e)=>{
        e.preventDefault();
        console.log(this.state.message)
        if(this.state.message){
            this.socket.emit('sendMessage',this.state.message,()=>{this.setState({message:''});});
        }
        
    }

    setMessage=(e)=>{
        this.setState({message:e.target.value});
        this.socket.emit('typing',this.state.name,()=> setTimeout(()=>{
            this.setTouchEnd();
        },2000));

       

    }

    setTouchEnd=(e)=>{
        console.log("ontouchend")
        this.socket.emit('onTouchEnd',this.state.name);
    }

    render(){
      return   <div className="outerContainer">
        <div class="container">
       <InfoBar room={this.state.room}/>
       <Messages messages={this.state.messages} name={this.state.name}/>
            {/* <input
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            onKeyPress={(e)=>e.key==='Enter'?sendMessage(e):null}
            /> */}
            {this.state.typeMessages&&this.state.typeMessages+"....."}

            <Input 
            message={this.state.message}
            sendMessage={this.sendMessage}
            setMessage={this.setMessage}
         
            />
       
        </div>
    </div>
    }
}


export default Chat
