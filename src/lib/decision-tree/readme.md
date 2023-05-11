# Usage

- Create two types: one rapresenting the decision, the other one the result.

- Create the decision schema using **createSchema** function. Types should be inferred, but generics can also be used.

- Now export the DecisionTree using **createDecisionTree** function.

- In the main component create a DecisionTreeProvider component using **createDecisionTreeProvider** and passing in the schema previously exported. Then wrap the main component.

- Now in each step **useStep** can be used to recover the decision data for each step passing an array of url params keys.

- In the same way **useResult** can be used to recover the result in the final step.
