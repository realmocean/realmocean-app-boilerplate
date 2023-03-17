import { HStack, Text, UIController, UIView } from '@tuval/forms';


export class AppController extends UIController {


    public override LoadView(): UIView {
        return (
            HStack(
                Text('Hello')
            )
        )
    }
}