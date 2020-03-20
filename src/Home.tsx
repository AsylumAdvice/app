import { makeStyles, Theme, createStyles, useTheme, Divider, List, ListItem, ListItemText, AppBar, Toolbar, IconButton, Hidden, Drawer, Typography, Icon, Box } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import AppIcon from './Logoshort.svg';
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

import QuestionaireImage from './Questionaire_picture.jpg';

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            display: 'flex',
        },
        imageIcon: {
            height: '100%'
        },
        iconRoot: {
            textAlign: 'center'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

function AsylumAdviceIcon() {
    const classes = useStyles();
    return <>
        <Icon classes={{ root: classes.iconRoot }}>
            <img alt="AsylumAdvice" className={classes.imageIcon} src={AppIcon} />
        </Icon>
    </>
}

/* https://material-ui.com/components/drawers/#responsive-drawer */
export function MenuBar() {
    const classes = useStyles();

    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const pages = ['Home', 'Concept', 'Team', 'Support', 'Blog', 'Languages'];
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {pages.map((text) => (
                    <ListItem divider button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return <>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                {/* Aligns the app icon on the right */}
                <Box flexGrow={1}></Box>
                <Box>
                    <AsylumAdviceIcon />
                </Box>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    </>
}

export function OverviewCard() {
    const classes = useStyles();
    return <>
        <Card className={classes.root}>
            <CardHeader title="Welcome to AsylumAdvice" />
            <CardMedia
                className={classes.media}
                image={QuestionaireImage}
            />
            <CardContent>
                <Typography variant="body1" color="textPrimary" component="p">
                    Find the information that is relevant to your asylum procedure
          </Typography>
            </CardContent>
        </Card>
    </>
}