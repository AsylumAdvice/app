import { makeStyles, createStyles, Typography } from "@material-ui/core";
import React from "react";
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

import QuestionaireImage from './Questionaire_picture.jpg';

import styled from 'styled-components';

import { Link } from "react-router-dom";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
    }),
);

// needed in order to remove the underline from links
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function OverviewCard() {
    const classes = useStyles()
    return <>
        <Card className={classes.root}>
            <CardHeader title="Welcome to Asylum Advice" />
            <CardMedia
                className={classes.media}
                image={QuestionaireImage}
                component={props => <StyledLink {...props} to={'/questionaire'} />}
            />
            <CardContent>
                <Typography variant="body1" color="textPrimary" component="p">
                    Find the information that is relevant to your asylum procedure
          </Typography>
            </CardContent>
        </Card>
    </>
}

function LawyerMap() {
    return <>
    </>
}

export function Home() {
    return <>
        <OverviewCard />
        <LawyerMap />
    </>
}