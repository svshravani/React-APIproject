import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa";

const MyCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
               <img 
                height="150" 
                width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}
                /> 
                <CardTitle className="text-primary">
                    <h1>
                        <span className= "pr=2px">{details.name?.title} {details.name?.first} {details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt className="pr=2px"/>
                    {details.location?.city}
                    {details.location?.state}
                </CardText>
                <FaEnvelope/>{details.email}
                <p>
                <FaPhone/>{details.phone}
                </p>
            </CardBody>
        </Card>
    )
};

export default MyCard;