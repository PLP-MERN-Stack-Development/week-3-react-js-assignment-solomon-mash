import Button from "../components/Button";
import Card from "../components/Card";

export default function Preview() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Component Preview</h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">Buttons</h3>
        <div className="space-x-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Card</h3>
        <Card title="Demo Card" footer="Card Footer">
          <p>This is the card body content. It supports any JSX children.</p>
        </Card>
      </section>
    </div>
  );
}
