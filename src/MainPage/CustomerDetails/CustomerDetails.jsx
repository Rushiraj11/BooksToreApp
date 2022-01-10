import React from 'react'
import TextField from "@mui/material/TextField";
import { Radio } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./CustomerDetails.css";
import UserService from "../../Service/UserService";

const userService = new UserService();




function CustomerDetails(props) {
    const [customer, setCustomerdata] = React.useState([]);
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [type, setType] = React.useState("");

  const takeState = (event) => setState(event.target.value);
  const takeAddress = (event) => setAddress(event.target.value);
  const takeCity = (event) => setCity(event.target.value);
  const takeValue = (event) => setType(event.target.value);

  let customerDetails = {
    addressType: type,
    fullAddress: address,
    city: city,
    state: state,
  };

  const loadCustomerdata = () => {
    userService
      .GetCartItems(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items"
      )
      .then((response) => {
        console.log(response, "data recieved");
        setCustomerdata(response.data.result[0].user_id);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

 
  const updateCustomerdetails = () => {
    userService.UpdateCustomerDetails("https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user",customerDetails)
      .then((response) => {
        console.log("updated address ", response);
      })
      .catch((err) => {
        console.warn(err);
      });
  };


  React.useEffect(() => {
    loadCustomerdata();
  }, []);

  return (
    <div className="validation-box">
      <div className="customer-details-title">
        <p>Customer details</p>
        <div className="addnewaddress">
          <p>Add new Address</p>
        </div>
      </div>

      <div className="inputfields-container">
        <div className="row-1-field">
          <TextField
            label=""
            id="outlined-size-small"
            defaultValue=""
            size="small"
            className="fullname-1r"
            value={customer.fullName}
            helperText="Full Name"
          />
          <TextField
            label=""
            id="outlined-size-small"
            defaultValue=""
            size="small"
            className="mobilenum-1r"
            value={customer.phone}
            helperText="Mobile Number"
          />
        </div>
        <div className="row-2-field">
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Address"
            className="Address-2r"
            onChange={takeAddress}
          />
        </div>
        <div className="row-3-field">
          <TextField
            label="City/Town"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            className="city-3r"
            onChange={takeCity}
          />
          <TextField
            label="State"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            className="state-3r"
            onChange={takeState}
          />
        </div>
      </div>

      <div className="continue-button-container">
        <div className="continue-button" onClick={updateCustomerdetails}>
          <p onClick={() => props.continueOrder(true)}>CONTINUE</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails
