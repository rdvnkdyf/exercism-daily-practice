"""Function to recite the lyrics to the Bottle Song."""
# plural_item = ["green bottle", "green bottles"]
plural_item = ["green bottle", "green bottles"]
str_numbers = [
    "no",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
]
verse_template = """{this_str_number} {this_item} hanging on the wall,
{this_str_number} {this_item} hanging on the wall,
And if {decrement_str_number} {decrement_item} should accidentally fall,
There'll be {next_str_number} {next_item} hanging on the wall."""
def recite(start: int, take: int = 1, decrement: int = 1) -> list[str]:
    """Recite the Bottle Song.
 
    :param int start: starting verse number.
    :param int take: how many verses to include, defaults to 1.
    :return list[str]: the verses.
    """
    verses = [
        create_verse(verse_number, decrement)
        for verse_number in range(
            start,
            start - take,
            -decrement,
        )
    ]
    return "\n\n".join(verses).split("\n")
def create_verse(verse_number: int, decrement: int) -> str:
    """Create a verse of the Bottle Song.
 
    :param int verse_number: the verse number to create.
    :return str: the verse.
    """
    is_this_item_plural = verse_number != 1
    is_next_item_plural = verse_number - decrement != 1
    is_decrement_item_plural = decrement != 1
    return verse_template.format(
        # this item
        this_str_number=str_numbers[verse_number],
        this_item=plural_item[is_this_item_plural],
        # next item
        next_str_number=str_numbers[verse_number - decrement].lower(),
        next_item=plural_item[is_next_item_plural],
        # decrement item
        decrement_str_number=str_numbers[decrement].lower(),
        decrement_item=plural_item[is_decrement_item_plural],
    )