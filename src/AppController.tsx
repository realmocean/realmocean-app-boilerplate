import { Text, UIController, UIView, ReactView, VStack } from '@tuval/forms';
import { logoTuval } from './logo';
import React from 'react';
import { useSpring, animated } from 'react-spring';



export class AppController extends UIController {

    public LoadView(): UIView {

        const props = useSpring({
            loop: true,
            from: { rotate: 0 },
            to: { rotate: 360 },
            config: { duration: 5000 },
        });

        const [logo, setLogo] = React.useState('');

        React.useEffect(() => {
            setLogo(logoTuval);
        })

        return (
            VStack(
                ReactView(
                    <animated.div style={props}>
                        <img src={logo} style={{padding: 10}}/>
                    </animated.div>
                ),
                Text('Hello Tuval').fontSize(30)
            )
        )
    }
}