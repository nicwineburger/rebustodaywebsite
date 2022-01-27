import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './NavMenu.css';

const NavMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div id="text">
            <Button color="secondary" onClick={toggle} style={{ marginBottom: '10px'}}>About</Button>
            <Collapse isOpen={isOpen}>
                <Card body className="text-center" inverse style={{ backgroundColor: '#000000', borderColor: '#000000', color:'#000000'}}>
                    <CardBody>
                        Created by <a href="https://www.twitter.com/baronblissy">@baronblissy</a>
                        <br/>
                        Please let me know if this breaks!
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default NavMenu;