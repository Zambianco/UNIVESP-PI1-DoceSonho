import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import { InstagramIcon } from '@material-ui/icons/Instagram';
import { WhatsAppIcon } from '@material-ui/icons/WhatsApp';

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
            maxWidth: 350
        },
        header: {
            'padding-left':'0px',
            'padding-right':'0px',
            'padding-top':'0px',
            'padding-bottom':'8px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)'
        },
        header_card: {
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
        },
        header_child: {
            'padding':'0px',
            'margin':'0px'
        }
      };
     return (
        <div >
        <Grid container style={useStyles.root}  spacing={2} justify="center">
            <Grid item xs={12} style={useStyles.header}>
                <Grid 
                container 
                direction="row"
                alignItems="stretch" 
                spacing={0}
                >
                    <Grid item ms={6} style={useStyles.header_child}>
                        <Card square={true} elevation={0} style={useStyles.header_card}>  
                            <CardMedia
                            component="img"
                            alt=""
                            image="../static/images/logo.png"
                            title=""
                            style={useStyles.header_card}
                            />
                        </Card>
                    </Grid>
                    <Grid item ms={6} style={useStyles.header_child}  >
                        <Card square={true} elevation={0} style={useStyles.header_card}>  
                            <CardContent style={useStyles.header_card}>
                                <Typography gutterBottom variant="h2" component="h2">
                                Confeitaria Doce Sonho
                                </Typography>
                                <Typography gutterBottom variant="h5" color="textSecondary" component="h2">
                                Trabalhamos com chocolate e muito amor em todas as épocas do ano!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
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
        </div>
     );
  }
}