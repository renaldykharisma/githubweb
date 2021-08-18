import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BaseLayout from "../components/base-layout";
import home from "../components/home";

export default function RouterRoot(){
    return(
        <div>
            <Router>
                <Switch>
                    <BaseLayout>
                        <Route path="/" component={home}></Route>
                    </BaseLayout>
                </Switch>
            </Router>
        </div>
    )
}