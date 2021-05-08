const easy = []
const medium = []
const hard = []
const veryHard = []

easy.push(
    [
        [NaN, NaN, NaN,   2,   4,   7, NaN,   8,   9],
        [  1,   2, NaN, NaN,   3, NaN,   4, NaN,   5],
        [  9,   7, NaN, NaN,   5, NaN, NaN, NaN, NaN],
        [NaN,   3, NaN, NaN, NaN,   1,   9, NaN, NaN],
        [  7, NaN, NaN, NaN, NaN, NaN, NaN, NaN,   4],
        [NaN, NaN,   1,   7, NaN, NaN, NaN,   3, NaN],
        [NaN, NaN, NaN, NaN,   1, NaN, NaN,   4,   2],
        [  2, NaN,   5, NaN,   6, NaN, NaN,   9,   3],
        [  3,   4, NaN,   9,   7,   2, NaN, NaN, NaN]
    ]
)

easy.push(
    [
        [  6, NaN, NaN, NaN, NaN, NaN,   8, NaN,   3],
        [NaN, NaN,   4, NaN,   3,   8,   2, NaN, NaN],
        [NaN, NaN, NaN, NaN,   7,   9,   4, NaN, NaN],
        [NaN, NaN,   6,   7, NaN,   2,   3,   5,   1],
        [NaN, NaN, NaN,   9,   1, NaN,   6, NaN, NaN],
        [NaN,   4, NaN,   3,   8, NaN, NaN, NaN, NaN],
        [  1,   7, NaN,   8, NaN, NaN,   5,   2,   6],
        [  2, NaN, NaN, NaN, NaN,   3,   7,   4,   8],
        [  4, NaN,   5, NaN,   6, NaN, NaN, NaN, NaN]
    ]
)

easy.push(
    [
        [  2, NaN, NaN, NaN,   4,   5,   7, NaN, NaN],
        [NaN,   1,   7, NaN,   8, NaN, NaN, NaN,   4],
        [NaN,   9, NaN, NaN,   3, NaN,   5, NaN, NaN],
        [NaN, NaN, NaN,   8,   2, NaN, NaN, NaN, NaN],
        [NaN,   4,   2,   1, NaN,   9, NaN,   7, NaN],
        [NaN, NaN, NaN,   4,   6,   3, NaN, NaN,   8],
        [NaN, NaN, NaN, NaN, NaN, NaN,   8,   9,   6],
        [NaN, NaN,   1, NaN, NaN,   2,   3, NaN, NaN],
        [  9,   3,   4, NaN, NaN,   8,   1, NaN, NaN]
    ]
)


medium.push(
    [
        [NaN,   4,   8, NaN, NaN, NaN, NaN, NaN, NaN],
        [NaN, NaN, NaN,   2, NaN, NaN,   5,   9, NaN],
        [NaN, NaN,   9, NaN,   1,   6, NaN, NaN,   3],
        [NaN,   6, NaN, NaN,   4, NaN,   9, NaN, NaN],
        [  4, NaN,   3, NaN,   2, NaN,   8, NaN,   7],
        [NaN, NaN,   2, NaN,   3, NaN, NaN,   1, NaN],
        [  5, NaN, NaN,   3,   6, NaN,   1, NaN, NaN],
        [NaN,   2,   4, NaN, NaN,   7, NaN, NaN, NaN],
        [NaN, NaN, NaN, NaN, NaN, NaN,   7,   5, NaN]
    ]
)

medium.push(
    [
        [NaN,   4, NaN, NaN, NaN,   9, NaN, NaN,   3],
        [NaN, NaN, NaN,   5, NaN, NaN,   8, NaN, NaN],
        [NaN,   1, NaN,   4, NaN,   7, NaN,   5, NaN],
        [  7,   8,   1, NaN, NaN, NaN, NaN,   6, NaN],
        [  4, NaN,   2, NaN, NaN, NaN,   5, NaN,   1],
        [NaN,   3, NaN, NaN, NaN, NaN,   7,   4,   2],
        [NaN,   6, NaN,   8, NaN,   5, NaN,   1, NaN],
        [NaN, NaN,   8, NaN, NaN,   2, NaN, NaN, NaN],
        [  2, NaN, NaN,   1, NaN, NaN, NaN,   3, NaN]
    ]
)

medium.push(
    [
        [  3, NaN, NaN, NaN,   7,   4, NaN, NaN, NaN],
        [NaN, NaN,   8,   9, NaN,   2,   7, NaN,   3],
        [NaN,   6, NaN, NaN,   8,   5, NaN, NaN, NaN],
        [  1, NaN,   5, NaN, NaN, NaN,   8,   4, NaN],
        [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
        [NaN,   8,   2, NaN, NaN, NaN,   6, NaN,   7],
        [NaN, NaN, NaN,   7,   4, NaN, NaN,   6, NaN],
        [  2, NaN,   7,   6, NaN,   3,   9, NaN, NaN],
        [NaN, NaN, NaN,   5,   2, NaN, NaN, NaN,   4]
    ]
)

hard.push(
    [
        [  8, NaN, NaN, NaN, NaN,   6, NaN, NaN,   2],
        [NaN, NaN,   1, NaN, NaN,   5,   8, NaN, NaN],
        [NaN,   6, NaN,   1, NaN,   9,   7, NaN, NaN],
        [NaN,   2, NaN, NaN,   5, NaN, NaN,   1,   8],
        [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
        [  7,   5, NaN, NaN,   1, NaN, NaN,   2, NaN],
        [NaN, NaN,   8,   6, NaN,   4, NaN,   7, NaN],
        [NaN, NaN,   7,   5, NaN, NaN,   3, NaN, NaN],
        [  9, NaN, NaN,   7, NaN, NaN, NaN, NaN,   1]
    ]
)

hard.push(
    [
        [NaN,   9,   4,   2, NaN,   5, NaN, NaN,   6],
        [NaN, NaN, NaN, NaN, NaN,   9, NaN, NaN, NaN],
        [NaN, NaN, NaN,   8,   4, NaN, NaN,   3, NaN],
        [  5, NaN,   9, NaN, NaN, NaN, NaN,   8,   1],
        [NaN, NaN,   8,   9, NaN,   3,   6, NaN, NaN],
        [  2,   3, NaN, NaN, NaN, NaN,   9, NaN,   5],
        [NaN,   4, NaN, NaN,   6,   8, NaN, NaN, NaN],
        [NaN, NaN, NaN,   5, NaN, NaN, NaN, NaN, NaN],
        [  7, NaN, NaN,   3, NaN,   4,   5,   1, NaN]
    ]
)

hard.push(
    [
        [NaN,   5,   4,   8, NaN,   2, NaN, NaN,   6],
        [NaN, NaN, NaN, NaN, NaN,   4, NaN, NaN, NaN],
        [NaN, NaN, NaN,   7,   3, NaN, NaN,   8, NaN],
        [  4, NaN,   1, NaN, NaN, NaN, NaN,   2,   9],
        [NaN, NaN,   3,   2, NaN,   1,   7, NaN, NaN],
        [  5,   7, NaN, NaN, NaN, NaN,   1, NaN,   4],
        [NaN,   2, NaN, NaN,   8,   7, NaN, NaN, NaN],
        [NaN, NaN, NaN,   1, NaN, NaN, NaN, NaN, NaN],
        [  3, NaN, NaN,   4, NaN,   9,   8,   1, NaN]
    ]
)

veryHard.push(
    [
        [NaN, NaN, NaN, NaN, NaN,   4, NaN, NaN, NaN],
        [  2, NaN, NaN, NaN, NaN, NaN,   7, NaN,   6],
        [  9,   7, NaN, NaN, NaN,   2, NaN,   5, NaN],
        [NaN, NaN, NaN, NaN, NaN,   9,   8,   6, NaN],
        [NaN, NaN, NaN,   5,   3,   7, NaN, NaN, NaN],
        [NaN,   9,   3,   4, NaN, NaN, NaN, NaN, NaN],
        [NaN,   2, NaN,   9, NaN, NaN, NaN,   3,   4],
        [  5, NaN,   8, NaN, NaN, NaN, NaN, NaN,   1],
        [NaN, NaN, NaN,   6, NaN, NaN, NaN, NaN, NaN]
    ]
)

veryHard.push(
    [
        [NaN,   2, NaN, NaN, NaN,   4,   3, NaN, NaN],
        [  9, NaN, NaN, NaN,   2, NaN, NaN, NaN,   8],
        [NaN, NaN, NaN,   6, NaN,   9, NaN,   5, NaN],
        [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,   1],
        [NaN,   7,   2,   5, NaN,   3,   6,   8, NaN],
        [  6, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
        [NaN,   8, NaN,   2, NaN,   5, NaN, NaN, NaN],
        [  1, NaN, NaN, NaN,   9, NaN, NaN, NaN,   3],
        [NaN, NaN,   9,   8, NaN, NaN, NaN,   6, NaN]
    ]
)

veryHard.push(
    [
        [  8, NaN, NaN, NaN,   4, NaN, NaN, NaN,   7],
        [NaN, NaN, NaN, NaN, NaN, NaN,   9,   6, NaN],
        [  7,   6, NaN, NaN, NaN, NaN, NaN,   8,   3],
        [NaN, NaN,   7, NaN, NaN,   6, NaN, NaN, NaN],
        [NaN,   5, NaN, NaN,   1, NaN, NaN,   9, NaN],
        [NaN,   1, NaN, NaN, NaN,   5, NaN,   3, NaN],
        [NaN, NaN, NaN,   8, NaN, NaN, NaN,   7, NaN],
        [  9, NaN,   2, NaN, NaN, NaN, NaN, NaN, NaN],
        [  3,   7,   1, NaN, NaN, NaN,   4, NaN, NaN]
    ]
)

const questions = {
    easy: easy,
    medium: medium,
    hard: hard,
    veryHard: veryHard
}

export default questions
