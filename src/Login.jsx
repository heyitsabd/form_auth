import { Button,Form } from "react-bootstrap";
import { AiFillGoogleCircle,AiOutlineFacebook,AiFillGithub } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css'

const Login=()=>{
    return(
        <div classname='login'>
            <h1>Choose a login method</h1>
            <div className="wrapper" style={{display:'flex',justifyContent:'center'}}>
                <div className="left" style={{margin:'100px'}}>
                    <div className="d-flex flex-column LoginButton" > 
                    <Button  style={{justifyContent:'left',fontSize:'30px',width:'200px',alignItems:'center',margin:'10px',backgroundColor:'tomato',borderColor:'tomato',boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}><AiFillGoogleCircle style={{ marginRight: '10px' }}/> Google</Button>
                    <Button variant="primary"  style={{justifyContent:'left',fontSize:'30px',width:'200px',alignItems:'center',margin:'10px',boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}><AiOutlineFacebook style={{ marginRight: '10px' }}/> Facebook</Button>
                    <Button   style={{justifyContent:'left',fontSize:'30px',width:'200px',alignItems:'center',margin:'10px',backgroundColor:'black',borderColor:'black',boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}><AiFillGithub style={{ marginRight: '10px' }}/> GitHub</Button>

                    </div>
                </div>
                <div style={{position:'relative',height:'100%'}}>
                <div className="hr_line"></div>
                <div  style={{margin:'200px 0px',border:'2px solid lightgray',borderRadius:'50%',padding:'10px'}}><b>OR</b></div>
                </div>
                <div className="right" style={{margin:'100px'}}>
                
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

                </div>
            </div>
        </div>
    )
}

export default Login;