from __future__ import annotations


def sum_of_multiples(limit: int, multiples: list[int]) -> int:
    return sum({n for item in multiples if item for n in range(item, limit, item)})