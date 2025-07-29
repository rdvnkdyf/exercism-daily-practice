from typing import List, NamedTuple

class Beast(NamedTuple):
    
    kind: str
    rhyme: str
BEASTS = [
    Beast("fly", ""),
    Beast("spider", "It wriggled and jiggled and tickled inside her."),
    Beast("bird", "How absurd to swallow a bird!"),
    Beast("cat", "Imagine that, to swallow a cat!"),
    Beast("dog", "What a hog, to swallow a dog!"),
    Beast("goat", "Just opened her throat and swallowed a goat!"),
    Beast("cow", "I don't know how she swallowed a cow!"),
    Beast("horse", "")
]

def verse(nth: int) -> List[str]:
    
    beast = BEASTS[nth-1]
    result = [f"I know an old lady who swallowed a {beast.kind}."]
    if beast.kind != "horse":
        if beast.rhyme:
            result.append(beast.rhyme)
        for other_beast in reversed(BEASTS[:nth-1]):
            roll = f"She swallowed the {beast.kind} to catch the {other_beast.kind}"
            if other_beast.kind == "spider":
                roll += " that {0}".format(other_beast.rhyme[3:-1])
            roll += "."
            result.append(roll)
            beast = other_beast
        result.append("I don't know why she swallowed the fly. Perhaps she'll die.")
    else:
        result.append("She's dead, of course!")
    return result
    
def recite(start: int, end: int) -> List[str]:
    result = []
    for nth in range(start, end + 1):
        result.extend(verse(nth))
        if nth < end:
            result.append("")
    return result