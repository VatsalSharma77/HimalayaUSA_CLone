import { Grid, GridItem } from "@chakra-ui/react";
import { Input, InputGroup } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
// import { IconButton } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
// import { Link } from "@chakra-ui/react";
export default function Footer() {
  return (
    <div style={{ marginTop: "50px" ,padding:"20px",backgroundColor:"#EEF2F0"}} className="footer">
      <Grid style={{marginTop:"50px",marginBottom:"50px"}} templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem style={{  }}>
          <p style={{ fontWeight: "600", fontSize: "20px" }}>Info</p>
          <body style={{ display: "flex", flexDirection: "column" }}>
            <ul style={{color:"grey",listStyle:"none",marginTop:"10px"}}>
              <li >Contact Us</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Store Locator</li>
              <li>Careers</li>
            </ul>
          </body>
        </GridItem>
        <GridItem style={{  }}>
          <p style={{ fontWeight: "600", fontSize: "20px" }}>Policies</p>
          <body style={{ display: "flex", flexDirection: "column" }}>
            <ul style={{color:"grey",listStyle:"none",marginTop:"10px"}}>
              <li>Shipping & Returns</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>CCPA</li>
              <li>Accessibility</li>
            </ul>
          </body>
        </GridItem>
        <GridItem style={{  }}>
          <p style={{ fontWeight: "600", fontSize: "20px" }}>Contact Us</p>
          <body style={{marginTop:"10px",fontWeight:"bold"}}>
            <p >
              Email: <br /> <span style={{color:"#A3B49B"}}>writetous@himalayausa.com</span>
            </p>
            <p>
              Phone: <br /><span style={{color:"#A3B49B"}}>1-800-869-4640 <br />Mon-Fri, 8am-5pm CT</span>
            </p>
            <p>
              Mail: Himalaya Wellness <br />
              <span style={{color:"#A3B49B"}}>1101 Gillingham Lane Sugar Land,<br /> TX 77478</span>
            </p>
          </body>
        </GridItem>
        <GridItem style={{  }}>
          <p style={{ fontWeight: "600", fontSize: "20px" }}>
            Subscribe to Our Newsletter!
          </p>
          <body style={{ display: "flex", flexDirection: "column",marginTop:"20px" }}>
            <InputGroup size="md">
              <Input
                padding="10px"
                pr="2.5rem"
                placeholder="Enter your e-mail"
                size="lg"
                border="1px solid green.500"
              />
              <Button
                rightIcon={
                  <EmailIcon h={25} w={25} color={"green.500"} mr={2} />
                }
                border="1px solid green.500"
                color="green.500"
              />
            </InputGroup>
            <p style={{marginTop:"20px",marginBottom:"10px"}}>
              By entering your email, you agree to our Terms & Conditions and
              Privacy Policy.
            </p>
            <p>Follow Us:</p>
          </body>
        </GridItem>
      </Grid>
      <p >© 2022 Himalaya Wellness. All rights reserved.</p>
      <p
        style={{
          fontSize: "13px",
          textAlign: "center",
          border: "1px solid black",
          padding: "14px",
          width: "94%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        *THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG
        ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR
        PREVENT ANY DISEASE.
      </p>
    </div>
  );
}
