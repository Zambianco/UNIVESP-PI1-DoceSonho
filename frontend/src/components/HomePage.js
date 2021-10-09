import React, { Component } from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect } from "react-router-dom"
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ButtonBase, Grid } from "@material-ui/core";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  showAlert(description) {
    alert(description);
  }

  render() {

    let itemData = [
        {"id":1, "title":"Bola de Basquete", "description":"Bolo bola de basquete. Massa branca amanteigada com recheio de delícia de ninho e morangos.", "image":"../static/images/basketball_cake.jpeg", "type":"cake"},
        {"id":2, "title":"Melhor Pai", "description":"Bolo bola de basquete. Massa branca amanteigada com recheio de delícia de ninho e morangos.", "image":"../static/images/best_father_decorated_cake.jpeg", "type":"cake"},
        {"id":3, "title":"Ovo de Páscoa", "description":"Bolo bola de basquete. Massa branca amanteigada com recheio de delícia de ninho e morangos.", "image":"../static/images/easter_egg_cake.jpeg", "type":"cake"},
        {"id":4, "title":"Fiona do Sherek", "description":"Bolo bola de basquete. Massa branca amanteigada com recheio de delícia de ninho e morangos.", "image":"../static/images/fiona_from_shrek_cake.jpeg", "type":"cake"},
        {"id":5, "title":"Flores", "description":"Bolo bola de basquete. Massa branca amanteigada com recheio de delícia de ninho e morangos.", "image":"../static/images/flower_decorated_cake.jpeg", "type":"cake"},
        {"id":6, "title":"Taça Feliz", "description":"Bolo bola de basquete. Massa branca amanteigada com recheio de delícia de ninho e morangos.", "image":"../static/images/happy_glass.jfif", "type":"cake"},
        {"id":7, "title":"Vulcão", "description":"Bolo bola de basquete. Massa branca amanteigada com recheio de delícia de ninho e morangos.", "image":"../static/images/homemade_volcano_cake_inside.jpeg", "type":"cake"},
        {"id":8, "title":"Vulcão", "description":"Bolo bola de basquete. Massa branca amanteigada com recheio de delícia de ninho e morangos.", "image":"../static/images/homemade_volcano_cake.jpeg", "type":"cake"},
        {"id":9, "title":"Decorado Rosa", "description":"Bolo bola de basquete. Massa branca amanteigada com recheio de delícia de ninho e morangos.", "image":"../static/images/pink_decorated_cake.jpeg", "type":"cake"},
        {"id":10, "title":"Girassol", "description":"Bolo bola de basquete. Massa branca amanteigada com recheio de delícia de ninho e morangos.", "image":"../static/images/sunflower_cake.jpg", "type":"cake"}
    ];
    var useStyles = {
        root :{
            flexGrow: 1
        },
        card: {
            maxWidth: 345
        }
      };
     return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Grid container style={useStyles.root}  spacing={2} justify="center">
                        <Grid item xs={10}>
                            <Grid container justify="center" spacing={2}>
                            {itemData.map((item) => (
                                <Grid item>
                                    <Card style={useStyles.card}>
                                        <CardActionArea onClick={() => {this.showAlert(item.title)} }>
                                            <CardMedia
                                            component="img"
                                            alt={item.description}
                                            height="300"
                                            image={item.image}
                                            title={item.title}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.description}
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Route>
                <Route path="/join" component={RoomJoinPage} />
                <Route path="/create" component={CreateRoomPage} />
            </Switch>
        </Router>
     );
  }
}