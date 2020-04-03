import React, { useContext } from "react";

import Context from "../store/context";

import CountrySelect from "./CountrySelect";

import {
  Button,
  Container,
  FormControl,
  Select,
  TextField,
  Typography
} from "@material-ui/core/";

import styled from "styled-components";

import { Link } from "react-router-dom";

// needed in order to remove the underline from links
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function Questionnaire() {
  const { state, actions }: any = useContext(Context);
  console.log("State: ", state);

  // const handleChange = (e: React.ChangeEvent<{ name?: string; value: any }>) => {
  //     const name = e.target.name as keyof typeof state;
  //     e.preventDefault();
  //     setState({
  //         ...state,
  //         [name]: e.target.value,
  //     });
  //     // console.log(state);
  // };

  return (
    <div>
      <Container>
        <Typography
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom={true}
        >
          Get and overview of your asylum proceedure by answering a few
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom={true}
        >
          Why answer questions?
        </Typography>

        <Typography variant="body1" color="textPrimary" paragraph={true}>
          By answering the following questions Asylum Advice can give you a
          general overview of what will be important in your asylum procedure
          and where you can find frther help. If you can't answer of of the
          questions or feel uncomfortable to do so, please skip that question.
        </Typography>
      </Container>

      <Container>
        <FormControl>
          <Typography variant="body1" color="textPrimary" component="p">
            How far are you in your asylum procedure?
          </Typography>

          <Select
            native
            value={state.asylumProgress}
            onChange={e =>
              actions({
                type: "setState",
                payload: { ...state, asylumProgress: e.target.value }
              })
            }
            // inputProps={{
            //     name: 'asylumProgress',
            //     id: 'aslum-progress'
            // }}
            variant="outlined"
            // input={<BootstrapInput />}
          >
            <option aria-label="None" value="" />
            <option value={"begin"}>About to start</option>
            <option value={"inProgress"}>In progress</option>
            <option value={"rejected"}>Rejected</option>
          </Select>
        </FormControl>

        <FormControl>
          <Typography variant="body1" color="textPrimary" component="p">
            Do you have a visa or asylum status in this country?
          </Typography>

          <Select
            native
            value={state.visa}
            // name='asylumProgress'
            onChange={e =>
              actions({
                type: "setState",
                payload: { ...state, visa: e.target.value }
              })
            }
            // inputProps={{
            //     name: 'visa',
            //     id: 'visa'
            // }}
            variant="outlined"
            // input={<BootstrapInput />}
          >
            <option aria-label="None" value="" />
            <option value={"No"}>No</option>
            <option value={"Yes"}>Yes</option>
          </Select>
        </FormControl>

        <FormControl>
          <Typography variant="body1" color="textPrimary" component="p">
            Did you leave fingerprints in different EU country?
          </Typography>

          <Select
            native
            value={state.fingerprints}
            onChange={e =>
              actions({
                type: "setState",
                payload: { ...state, fingerprints: e.target.value }
              })
            }
            // inputProps={{
            //     name: 'fingerprints',
            //     id: 'fingerprints'
            // }}
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={"No"}>No</option>
            <option value={"Yes"}>Yes</option>
          </Select>
        </FormControl>

        <FormControl>
          <Typography variant="body1" color="textPrimary" component="p">
            Do you have your passport with you?
          </Typography>

          <Select
            native
            value={state.passport}
            onChange={e =>
              actions({
                type: "setState",
                payload: { ...state, passport: e.target.value }
              })
            }
            // inputProps={{
            //     name: 'passport',
            //     id: 'passport'
            // }}
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={"No"}>No</option>
            <option value={"Yes"}>Yes</option>
          </Select>
        </FormControl>

        <FormControl>
          <Typography variant="body1" color="textPrimary" component="p">
            What is your nationality??
          </Typography>

          <CountrySelect />
        </FormControl>

        <FormControl>
          <Typography variant="body1" color="textPrimary" component="p">
            Are you under 18?
          </Typography>

          <Select
            native
            value={state.under18}
            onChange={e =>
              actions({
                type: "setState",
                payload: { ...state, under18: e.target.value }
              })
            }
            // inputProps={{
            //     name: 'under18',
            //     id: 'under18'
            // }}
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={"No"}>No</option>
            <option value={"Yes"}>Yes</option>
          </Select>
        </FormControl>

        <FormControl>
          <Typography variant="body1" color="textPrimary" component="p">
            Have you come here with members of your family or do you have
            relatives already in Germany?
          </Typography>

          <Select
            native
            value={state.familyInGermany}
            onChange={e =>
              actions({
                type: "setState",
                payload: { ...state, familyInGermany: e.target.value }
              })
            }
            // inputProps={{
            //     name: 'familyInGermany',
            //     id: 'family-germany'
            // }}
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={"No"}>No</option>
            <option value={"Yes"}>Yes</option>
          </Select>
        </FormControl>

        <FormControl>
          <Typography variant="body1" color="textPrimary" component="p">
            Are your clode family members still in your home country or
            somewhere else?
          </Typography>

          <Select
            native
            value={state.familyElsewhere}
            onChange={e =>
              actions({
                type: "setState",
                payload: { ...state, familyElsewhere: e.target.value }
              })
            }
            // inputProps={{
            //     name: 'familyElsewhere',
            //     id: 'family-elsewhere'
            // }}
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={"No"}>No</option>
            <option value={"Yes"}>Yes</option>
          </Select>
        </FormControl>

        <FormControl>
          <Typography variant="body1" color="textPrimary" component="p">
            In which location are you looking for legal aid?
          </Typography>

          <TextField
            value={state.adviceLocation}
            onChange={e =>
              actions({
                type: "setState",
                payload: { ...state, adviceLocation: e.target.value }
              })
            }
            // inputProps={{
            //     name: 'adviceLocation',
            //     id: 'advice-location'
            // }}
            variant="outlined"
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => console.log("Submitted Form: ", state)}
          component={StyledLink}
          to={"/overview"}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
}
