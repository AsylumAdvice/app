import React, { useContext } from "react";
import Context from "../store/context";
import CityFilter from "../components/CityFilter"
import CountrySelect from "./CountrySelect";
import {
  Button,
  Container,
  FormControl,
  Select,
  Typography,
} from "@material-ui/core/";
import { Link } from "react-router-dom";

export default function Questionnaire(props: any) {
  const { state, actions }: any = useContext(Context);
  // console.log("State: ", state);

  // const handleChange = (e: React.ChangeEvent<{ name?: string; value: any }>) => {
  //     const name = e.target.name as keyof typeof state;
  //     e.preventDefault();
  //     setState({
  //         ...state,
  //         [name]: e.target.value,
  //     });
  //     // console.log(state);
  // };

  // const handleNationality = (
  //   e: React.ChangeEvent<{ name?: string; value: any }>
  // ) => {
  //   console.log("handleNationalty: ", e.target.value);
  //   actions({
  //     type: "setState",
  //     payload: { ...state, nationality: e.target.value },
  //   });
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
            onChange={(e) =>
              actions({
                type: "setState",
                payload: { ...state, asylumProgress: e.target.value },
              })
            }
            variant="outlined"
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
            onChange={(e) =>
              actions({
                type: "setState",
                payload: { ...state, visa: e.target.value },
              })
            }
            variant="outlined"
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
            onChange={(e) =>
              actions({
                type: "setState",
                payload: { ...state, fingerprints: e.target.value },
              })
            }
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
            onChange={(e) =>
              actions({
                type: "setState",
                payload: { ...state, passport: e.target.value },
              })
            }
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
            onChange={(e) =>
              actions({
                type: "setState",
                payload: { ...state, under18: e.target.value },
              })
            }
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
            onChange={(e) =>
              actions({
                type: "setState",
                payload: { ...state, familyInGermany: e.target.value },
              })
            }
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
            onChange={(e) =>
              actions({
                type: "setState",
                payload: { ...state, familyElsewhere: e.target.value },
              })
            }
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
          <CityFilter />

          {/* <TextField
            value={state.adviceLocation}
            onChange={(e) =>
              actions({
                type: "setState",
                payload: { ...state, adviceLocation: e.target.value },
              })
            }
            variant="outlined"
          /> */}
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => console.log("Submitted Form: ", state)}
          component={Link}
          to={"/overview"}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
}
