import React from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  Checkbox,
  Grid,
  Switch,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { connect, useDispatch, useSelector } from "react-redux";

const Buttons = ({ state }) => {
  let dispatch = useDispatch();

  let viewBg = useSelector((state) => {
    return state["color"];
  });

  return (
    <div style={{ backgroundColor: state.bgStore.color }}>
      <Grid
        item
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        hight="100%"
      >
        <Grid item>
          <Button
            style={{ backgroundColor: "#5E4FDB", color: "#FFFFFF" }}
            onClick={() =>
              dispatch({
                type: "BACKCOLOR",
                payload: "#5E4FDB",
              })
            }
          >
            Button
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            style={{ backgroundColor: "#F3F2FC", color: "#5E4FDB" }}
            onClick={() =>
              dispatch({
                type: "BACKCOLOR",
                payload: "#F3F2FC",
              })
            }
            style={{ backgroundColor: viewBg }}
          >
            Button
          </Button>
        </Grid>

        <Grid item>
          <Button
            style={{ backgroundColor: "#ffffff", color: "#5E4FDB" }}
            onClick={() =>
              dispatch({
                type: "BACKCOLOR",
                payload: "#5E4FDB",
              })
            }
          >
            Button
          </Button>
        </Grid>

        <Grid
          item
          container
          spacing={2}
          xs={12}
          md={6}
          sm={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Checkbox
              defaultChecked
              indeterminate
              style={{ backgroundColor: "#F3F2FC", color: "#852121" }}
              inputProps={{
                "aria-label": "indeterminate checkbox",
                variant: "oulined",
              }}
              onClick={() =>
                dispatch({
                  type: "BACKCOLOR",
                  payload: "#852121",
                })
              }
            />
          </Grid>
          <Grid item>
            <Checkbox
              variant="outlined"
              icon={<AddIcon size="small" />}
              inputProps={{
                "aria-label": "indeterminate checkbox",
                variant: "oulined",
              }}
              style={{ backgroundColor: "#ffffff", color: "#5E4FDB" }}
              onClick={() =>
                dispatch({
                  type: "BACKCOLOR",
                  payload: "#5E4FDB",
                })
              }
            />
          </Grid>
          <Grid item>
            <Checkbox
              style={{ backgroundColor: "#F3F2FC", color: "#1ABC9C" }}
              onClick={() =>
                dispatch({
                  type: "BACKCOLOR",
                  payload: "#1ABC9C",
                })
              }
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          spacing={2}
          xs={12}
          md={6}
          sm={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Checkbox
              indeterminate
              style={{ backgroundColor: "#F3F2FC", color: "#852121" }}
              onClick={() =>
                dispatch({
                  type: "BACKCOLOR",
                  payload: "#852121",
                })
              }
            />
          </Grid>
          <Grid item>
            <Checkbox
              icon={<AddIcon size="small" />}
              size="medium"
              variant="contained"
              inputProps={{ "aria-label": "checkbox" }}
              style={{ backgroundColor: "#fffff", color: "#5E4FDB" }}
              onClick={() =>
                dispatch({
                  type: "BACKCOLOR",
                  payload: "#5E4FDB",
                })
              }
            />
          </Grid>

          <Grid item>
            <Checkbox
              checked
              size="medium"
              variant="outlined"
              inputProps={{ "aria-label": "checkbox" }}
              style={{ backgroundColor: "#F3F2FC", color: "#1ABC9C" }}
              onClick={() =>
                dispatch({
                  type: "BACKCOLOR",
                  payload: "#1ABC9C",
                })
              }
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        spacing={2}
        xs={12}
        md={6}
        sm={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <FormGroup>
            <FormControlLabel
              control={<Switch name="checkedA" />}
              style={{ backgroundColor: "#1ABC9C", color: "#F3F2FC" }}
              onClick={() =>
                dispatch({
                  type: "BACKCOLOR",
                  payload: "#1ABC9C",
                })
              }
            />
          </FormGroup>
        </Grid>

        <Grid item>
          <FormControlLabel
            control={<Switch name="checkedB" />}
            style={{ backgroundColor: "#852121", color: "#F3F2FC" }}
            onClick={() =>
              dispatch({
                type: "BACKCOLOR",
                payload: "#852121",
              })
            }
          />
        </Grid>

        <Grid item>
          <FormControlLabel
            control={<Switch name="checkedC" />}
            style={{ backgroundColor: "#1ABC9C", color: "#F3F2FC" }}
            onClick={() =>
              dispatch({
                type: "BACKCOLOR",
                payload: "#1ABC9C",
              })
            }
          />
        </Grid>

        <Grid item>
          <FormControlLabel
            control={<Switch name="checkedD" />}
            style={{ backgroundColor: "#F3F2FC", color: "#F3F2FC" }}
            onClick={() =>
              dispatch({
                type: "BACKCOLOR",
                payload: "#F3F2FC",
              })
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(Buttons);
