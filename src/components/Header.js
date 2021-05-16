import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron className="jumbo">
            <h1>Adopcja zwierzaka</h1>
            <p>
                Katalog zwierząt gotowych do zaadoptowania.
            </p>
            <p>
                <Button 
                href='https://schronisko.uml.lodz.pl' 
                target='_blank' 
                rel='noopener noreferrer' 
                variant="light"
                className="header_button"
                active>
                    Schronisko</Button>
            </p>
    </Jumbotron>
    )
}

export default Header;