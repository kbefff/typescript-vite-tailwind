// This Container shows one of the ways of composing different elements: by passing them as children.

// It takes a props object with a children parameter of type JSX.Element | JSX.Element[]. This means we can compose it with any other HTML element or any other components we create. It can be rendered wherever we want inside the container — in this case inside the second div.
const Container = ({ children, title }: { children: JSX.Element | JSX.Element[]; title?: string }) => {
  return (
    <div className="bg-green-600 p-4 border shadow rounded-md">
      {title && <h2 className="text-xl pb-2 text-white">{title}</h2>} {/* QUESTION:  why is this title and h2 title?*/}
      <div>{children}</div>
    </div>
  );
};

export default Container;
