#!/usr/bin/env node

import { gte } from "semver"

const left = process.argv[2]
const right = process.argv[3]

if (gte(left, right)) {
	process.exit(0)
}
process.exit(1)
