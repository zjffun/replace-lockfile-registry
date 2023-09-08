#!/usr/bin/env node

import { Command } from "commander";

import replace from "./command/replace.js";

const program = new Command();

replace(program);

program.parse();
