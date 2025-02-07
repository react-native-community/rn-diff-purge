#!/usr/bin/env node

// when comparing A and B
// if A < B, return 1
// if A == B, return 2
// if A > B, return 3

import { gt, lt } from "semver"

const left = process.argv[2]
const right = process.argv[3]

if (lt(left, right)) {
	process.exit(1)
}
if (gt(left, right)) {
	process.exit(3)
}
process.exit(2)
