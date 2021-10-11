import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple,pink } from '@material-ui/core/colors';
import Instagram from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button'
import WhatsApp from '@material-ui/icons/WhatsApp';
import Email from '@material-ui/icons/Email'
import ButtonGroup from '@material-ui/core/ButtonGroup';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  showAlert(description) {
    alert(description);
  }

  goToAnotherUrl(url){
    window.open(url, '_blank').focus();
  }

  goToWhatsApp(){
    this.goToAnotherUrl("https://wa.me/11985935897");
  }

  goToInstagram(){
    this.goToAnotherUrl("https://www.instagram.com/confeitariadocesonho2106/");
  }

  render() {

    let InstagramColorButton = withStyles((theme) => ({
        root: {
          color: '#FFFFFF',
          backgroundColor: '#E4405F',
          '&:hover': {
            backgroundColor: pink[300],
          },
        },
      }))(Button);

      let EmailColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(purple[500]),
            backgroundColor: purple[500],
            '&:hover': {
              backgroundColor: purple[700],
            },
        },
      }))(Button);
    
    let WhatsAppColorButton = withStyles((theme) => ({
        root: {
          color: '#FFFFFF',
          backgroundColor: '#25D366',
          '&:hover': {
            backgroundColor: green[300],
          },
        },
      }))(Button);

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
                alignItems="center" 
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
                        <Card square={true} elevation={0} style={useStyles.header_card} >  
                            <CardContent style={useStyles.header_card}>
                                <Typography gutterBottom variant="h2" component="h2">
                                Confeitaria Doce Sonho
                                </Typography>
                                <Typography gutterBottom variant="h5" color="textSecondary" component="h2">
                                Trabalhamos com chocolate e muito amor em todas as épocas do ano!
                                </Typography>
                                <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}>
                                    <Grid item>
                                    <InstagramColorButton
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<Instagram />}
                                        onClick={() => this.goToInstagram()}
                                    >
                                        Instagram
                                    </InstagramColorButton>
                                    </Grid>
                                    <Grid item>
                                    <EmailColorButton
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<Email />}
                                    >
                                       Email
                                    </EmailColorButton>
                                    </Grid>
                                    <Grid item>
                                    <WhatsAppColorButton
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<WhatsApp />}
                                        onClick={() => {this.goToWhatsApp()}}
                                    >
                                        WhatsApp
                                    </WhatsAppColorButton>
                                    </Grid>
                                </Grid>
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