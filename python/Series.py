def validate(series, slice):
    EVAL = {
        "slice == 0": "slice length cannot be zero",
        "slice < 1" : "slice length cannot be negative",
        "len(series) == 0": "series cannot be empty",
        "slice > len(series)": "slice length cannot be greater than series length"
}
    for expression, message in EVAL.items():
        if eval(expression):
            raise ValueError(message)
def slices(series, slice):
    validate(series, slice)
    return [series[i:i + slice] for i in range(len(series) - slice + 1)]