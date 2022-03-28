import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const events = createSlice({
  name: "events",
  initialState,
  reducers: {
    AddEvents(state, { payload, type }) {
      let groupBy = payload.reduce((r, a) => {
        r[a.EventType.S] = [...(r[a.EventType.S] || []), a];
        return r;
      }, {});

      //console.log(events[0].EventType.S);

      state.events = groupBy;
    },
  },
});

export const { AddEvents } = events.actions;

export default events.reducer;
