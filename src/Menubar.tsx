import { makeStyles, Theme, createStyles, Divider, List, ListItem, ListItemText, AppBar, Toolbar, IconButton, Hidden, Drawer, Icon, Box } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import AppIcon from './Logoshort.svg';
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { Omit } from '@material-ui/types';

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
    const classes = useStyles()
    return <>
        <Icon classes={{ root: classes.iconRoot }}>
            <img alt="AsylumAdvice" className={classes.imageIcon} src={AppIcon} />
        </Icon>
    </>
}

// https://material-ui.com/guides/composition/#list
interface ListItemLinkProps {
    primary: string
    to: string
}

// https://material-ui.com/components/drawers/#responsive-drawer
export function MenuBar() {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    function ListItemLink(props: ListItemLinkProps) {
        const { primary, to } = props

        const renderLink = React.useMemo(
            () =>
                React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
                    <RouterLink to={to} ref={ref} {...itemProps} />
                )),
            [to],
        );

        return (
            <li>
                <ListItem onClick={handleDrawerToggle} button divider key={primary} component={renderLink}>
                    <ListItemText primary={primary} />
                </ListItem>
            </li>
        )
    }

    const pages = [['Home', 'home'], ['Concept', 'questionaire'], ['Team', 'home'], ['Support', 'home'], ['Blog', 'home'], ['Languages', 'home']];

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItemLink primary={item[0]} to={`/${item[1]}`} />
                ))}
            </List>
        </div>
    )

    return <>
        <AppBar position="sticky" className={classes.appBar}>
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
                    anchor='left'
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