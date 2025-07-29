"""
Exercism solution for "custom-set"
"""
from itertools import chain
from typing import Any, Iterable, KeysView, Optional


class CustomSet:
    """
    Simple implementation of a set.
    """

    def __init__(self, elements: Optional[Iterable[Any]] = None) -> None:
        self._elements = {e: None for e in elements or []}

    @property
    def elements(self) -> KeysView[Any]:
        """
        Read-only access to the elements of the CustomSet.
        """
        return self._elements.keys()

    def isempty(self) -> bool:
        """
        Return True if the set is empty.
        """
        return not self.elements

    def __contains__(self, element: Any) -> bool:
        return element in self.elements

    def issubset(self, other: "CustomSet") -> bool:
        """
        Return True if self is a subset of other.
        """
        return not self.difference(other).elements

    def isdisjoint(self, other: "CustomSet") -> bool:
        """
        Return the disjoint of self and other.
        """
        return not self.intersection(other).elements

    def __eq__(self, other: Any) -> bool:
        if isinstance(other, CustomSet):
            return self.elements == other.elements
        return NotImplemented

    def add(self, element: Any) -> None:
        """
        Add element to the set.
        """
        self._elements[element] = None

    def intersection(self, other: "CustomSet") -> "CustomSet":
        """
        Return the intersection of self and other.
        """
        intersect = CustomSet()
        for element in chain(self.elements, other.elements):
            if element in self and element in other:
                intersect.add(element)
        return intersect

    def difference(self, other: "CustomSet") -> "CustomSet":
        """
        Return the difference of self and other.
        """
        return CustomSet([e for e in self.elements if e not in other])

    def __sub__(self, other: Any) -> "CustomSet":
        if isinstance(other, CustomSet):
            return self.difference(other)
        return NotImplemented

    def union(self, other: "CustomSet") -> "CustomSet":
        """
        Return the union of self and other.
        """
        return CustomSet(chain(self.elements, other.elements))

    def __add__(self, other: "CustomSet") -> "CustomSet":
        if isinstance(other, CustomSet):
            return self.union(other)
        return NotImplemented