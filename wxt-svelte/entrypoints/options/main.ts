import { mount } from "svelte";
import "../popup/style.css";
import App from "./App.svelte";

mount(App, { target: document.getElementById("app")! });
