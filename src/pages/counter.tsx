import { Button } from "@/components/ui/button";
// import { decrement, increment } from "@/redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const Counter = () => {
  // const dispatch = useAppDispatch();
  // const { count } = useAppSelector((state) => state.counter);

  // const handleIncrement = () => {
  //   dispatch(increment());
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  return (
    <div>
      <h1>Counter with Redux</h1>
      <Button>Increment</Button>
      <div>0</div>
      <Button>Decrement</Button>
    </div>
  );
};
