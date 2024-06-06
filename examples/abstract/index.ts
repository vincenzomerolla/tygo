// Code generated by tygo. DO NOT EDIT.
export type Something = string | number;

//////////
// source: iota.go

export type MyIotaType = number /* int */;
export const Zero: MyIotaType = 0;
export const One: MyIotaType = 1;
export const Two: MyIotaType = 2;
export const Four: MyIotaType = 4;
export const FourString: string = "four";
export const AlsoFourString: string = "four";
export const Five = 5;
export const FiveAgain = 5;
export const Sixteen = 10 + 6;
export const Seventeen = 11 + 6;

//////////
// source: misc.go
/*
Package level
Second line of package level comment.
*/

/**
 * Comment belonging to Foo
 */
export type Foo = string;
export type FooInt64 = number /* int64 */;
/**
 * Comment for the const group declaration
 */
export const ConstNumberValue = 123; // Line comment behind field with value 123
/**
 * Individual comment for field ConstStringValue
 */
export const ConstStringValue = "abc";
/**
 * Comment for the const group declaration
 */
export const ConstFooValue: Foo = "foo_const_value";
export const Alice = "Alice";
/**
 * Multiline comment for StructBar
 * Some more text
 */
export interface StructBar {
  /**
   * Comment for field Field of type Foo
   */
  field: Foo; // Line Comment for field Field of type Foo
  weird: number /* int64 */;
  field_that_should_be_optional?: string;
  field_that_should_not_be_optional?: string;
  field_that_should_be_readonly: string;
}
