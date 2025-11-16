import { useState } from 'react';
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Badge,
  Avatar,
  AvatarGroup,
  Spinner,
  Checkbox,
  Divider,
  Typography,
  Heading1,
  Heading2,
  Heading3,
  Body,
  Caption,
  Container,
  Grid,
  Flex,
  FormField,
  FormGroup,
} from './components/ui';
import { Search, Star, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <Container>
          <Flex justify="between" align="center">
            <Heading3 color="brand">Glimmora Hotel</Heading3>
            <Flex gap={4} align="center">
              <a href="#" className="nav-link">Rooms</a>
              <a href="#" className="nav-link">Amenities</a>
              <a href="#" className="nav-link">Contact</a>
              <Button variant="primary" size="medium">Book Now</Button>
            </Flex>
          </Flex>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <Container>
          <div className="hero-content">
            <Typography variant="overline" color="brand" gutterBottom>
              Welcome to Luxury
            </Typography>
            <Heading1 gutterBottom>Experience the Finest Accommodation</Heading1>
            <Body color="secondary" gutterBottom>
              Discover unparalleled comfort and elegance at Glimmora Hotel. Your perfect stay awaits.
            </Body>
            <Flex gap={4} style={{ marginTop: '32px' }}>
              <Button variant="primary" size="large" endIcon={<ArrowRight size={20} />}>
                Explore Rooms
              </Button>
              <Button variant="secondary" size="large">View Gallery</Button>
            </Flex>
          </div>
        </Container>
      </section>

      {/* Design System Showcase */}
      <Container style={{ marginTop: '80px', marginBottom: '80px' }}>

        {/* Typography */}
        <section style={{ marginBottom: '64px' }}>
          <Heading2 gutterBottom>Typography</Heading2>
          <Divider spacing="large" />
          <Grid cols={2} gap="large">
            <div>
              <Heading1>Heading 1</Heading1>
              <Heading2>Heading 2</Heading2>
              <Heading3>Heading 3</Heading3>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
            </div>
            <div>
              <Body gutterBottom>
                This is body text. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Body>
              <Typography variant="subtitle1" gutterBottom>
                Subtitle 1 - Medium weight secondary text
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Subtitle 2 - Medium weight secondary text
              </Typography>
              <Caption>Caption text - smaller tertiary text for additional information</Caption>
            </div>
          </Grid>
        </section>

        {/* Buttons */}
        <section style={{ marginBottom: '64px' }}>
          <Heading2 gutterBottom>Buttons</Heading2>
          <Divider spacing="large" />
          <Grid cols={3} gap="medium">
            <div>
              <Caption gutterBottom>Primary</Caption>
              <Flex direction="column" gap={3}>
                <Button variant="primary" size="large">Large Button</Button>
                <Button variant="primary" size="medium">Medium Button</Button>
                <Button variant="primary" size="small">Small Button</Button>
                <Button variant="primary" loading={loading} onClick={handleButtonClick}>
                  {loading ? 'Loading...' : 'Click Me'}
                </Button>
              </Flex>
            </div>
            <div>
              <Caption gutterBottom>Secondary</Caption>
              <Flex direction="column" gap={3}>
                <Button variant="secondary" size="large">Large Button</Button>
                <Button variant="secondary" size="medium">Medium Button</Button>
                <Button variant="secondary" size="small">Small Button</Button>
                <Button variant="secondary" disabled>Disabled</Button>
              </Flex>
            </div>
            <div>
              <Caption gutterBottom>Ghost</Caption>
              <Flex direction="column" gap={3}>
                <Button variant="ghost" size="large">Large Button</Button>
                <Button variant="ghost" size="medium">Medium Button</Button>
                <Button variant="ghost" size="small">Small Button</Button>
                <Button variant="ghost" startIcon={<Star size={16} />}>With Icon</Button>
              </Flex>
            </div>
          </Grid>
        </section>

        {/* Inputs */}
        <section style={{ marginBottom: '64px' }}>
          <Heading2 gutterBottom>Inputs & Forms</Heading2>
          <Divider spacing="large" />
          <Grid cols={2} gap="large">
            <FormGroup>
              <FormField>
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  required
                />
              </FormField>
              <FormField>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  startIcon={<Search size={16} />}
                  helperText="We'll never share your email"
                />
              </FormField>
              <FormField>
                <Input
                  label="Error State"
                  placeholder="Enter text"
                  error
                  errorMessage="This field is required"
                />
              </FormField>
            </FormGroup>
            <FormGroup>
              <FormField>
                <Input
                  label="Search"
                  placeholder="Search rooms..."
                  startIcon={<Search size={16} />}
                />
              </FormField>
              <FormField>
                <Checkbox label="I agree to the terms and conditions" />
                <Checkbox label="Send me promotional emails" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                <Checkbox label="Disabled option" disabled />
              </FormField>
            </FormGroup>
          </Grid>
        </section>

        {/* Cards */}
        <section style={{ marginBottom: '64px' }}>
          <Heading2 gutterBottom>Cards</Heading2>
          <Divider spacing="large" />
          <Grid cols={3} gap="medium">
            <Card hoverable>
              <CardHeader>
                <Flex justify="between" align="center">
                  <Typography variant="h5">Deluxe Room</Typography>
                  <Badge variant="success">Available</Badge>
                </Flex>
              </CardHeader>
              <CardBody>
                <Flex direction="column" gap={2}>
                  <Flex gap={2} align="center">
                    <MapPin size={16} />
                    <Caption>Ocean View</Caption>
                  </Flex>
                  <Flex gap={2} align="center">
                    <Users size={16} />
                    <Caption>2-4 Guests</Caption>
                  </Flex>
                  <Body>Experience luxury with panoramic ocean views and premium amenities.</Body>
                </Flex>
              </CardBody>
              <CardFooter>
                <Flex justify="between" align="center">
                  <Typography variant="h4" color="brand">$299</Typography>
                  <Button variant="primary" size="small">Book Now</Button>
                </Flex>
              </CardFooter>
            </Card>

            <Card variant="outlined" hoverable>
              <CardHeader>
                <Flex justify="between" align="center">
                  <Typography variant="h5">Suite</Typography>
                  <Badge variant="warning">Limited</Badge>
                </Flex>
              </CardHeader>
              <CardBody>
                <Flex direction="column" gap={2}>
                  <Flex gap={2} align="center">
                    <Star size={16} />
                    <Caption>Premium Suite</Caption>
                  </Flex>
                  <Flex gap={2} align="center">
                    <Users size={16} />
                    <Caption>4-6 Guests</Caption>
                  </Flex>
                  <Body>Spacious suite with separate living area and stunning city views.</Body>
                </Flex>
              </CardBody>
              <CardFooter>
                <Flex justify="between" align="center">
                  <Typography variant="h4" color="brand">$499</Typography>
                  <Button variant="primary" size="small">Book Now</Button>
                </Flex>
              </CardFooter>
            </Card>

            <Card variant="flat" hoverable>
              <CardHeader>
                <Flex justify="between" align="center">
                  <Typography variant="h5">Standard Room</Typography>
                  <Badge variant="successLight">Best Value</Badge>
                </Flex>
              </CardHeader>
              <CardBody>
                <Flex direction="column" gap={2}>
                  <Flex gap={2} align="center">
                    <Calendar size={16} />
                    <Caption>Flexible Dates</Caption>
                  </Flex>
                  <Flex gap={2} align="center">
                    <Users size={16} />
                    <Caption>1-2 Guests</Caption>
                  </Flex>
                  <Body>Comfortable room with all essential amenities for a pleasant stay.</Body>
                </Flex>
              </CardBody>
              <CardFooter>
                <Flex justify="between" align="center">
                  <Typography variant="h4" color="brand">$149</Typography>
                  <Button variant="primary" size="small">Book Now</Button>
                </Flex>
              </CardFooter>
            </Card>
          </Grid>
        </section>

        {/* Badges */}
        <section style={{ marginBottom: '64px' }}>
          <Heading2 gutterBottom>Badges</Heading2>
          <Divider spacing="large" />
          <Flex gap={3} wrap="wrap">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="successLight">Success Light</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="warningLight">Warning Light</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="errorLight">Error Light</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="infoLight">Info Light</Badge>
            <Badge variant="primary" icon={<Star size={12} />}>With Icon</Badge>
            <Badge variant="success" dot />
            <Badge variant="error" dot />
          </Flex>
        </section>

        {/* Avatars */}
        <section style={{ marginBottom: '64px' }}>
          <Heading2 gutterBottom>Avatars</Heading2>
          <Divider spacing="large" />
          <Flex direction="column" gap={6}>
            <div>
              <Caption gutterBottom>Sizes</Caption>
              <Flex gap={4} align="center">
                <Avatar size="small" initials="JD" />
                <Avatar size="medium" initials="JD" />
                <Avatar size="large" initials="JD" />
                <Avatar size="xlarge" initials="JD" />
              </Flex>
            </div>
            <div>
              <Caption gutterBottom>Status Indicators</Caption>
              <Flex gap={4} align="center">
                <Avatar initials="JD" status="online" />
                <Avatar initials="SM" status="busy" />
                <Avatar initials="AK" status="away" />
                <Avatar initials="PT" status="offline" />
              </Flex>
            </div>
            <div>
              <Caption gutterBottom>Avatar Group</Caption>
              <AvatarGroup max={4}>
                <Avatar initials="John Doe" />
                <Avatar initials="Sarah Miller" />
                <Avatar initials="Alex Kim" />
                <Avatar initials="Pat Taylor" />
                <Avatar initials="Chris Lee" />
                <Avatar initials="Morgan White" />
              </AvatarGroup>
            </div>
          </Flex>
        </section>

        {/* Spinner */}
        <section style={{ marginBottom: '64px' }}>
          <Heading2 gutterBottom>Loading States</Heading2>
          <Divider spacing="large" />
          <Flex gap={8} align="center">
            <Flex direction="column" gap={4} align="center">
              <Caption>Small</Caption>
              <Spinner size="small" />
            </Flex>
            <Flex direction="column" gap={4} align="center">
              <Caption>Medium</Caption>
              <Spinner size="medium" />
            </Flex>
            <Flex direction="column" gap={4} align="center">
              <Caption>Large</Caption>
              <Spinner size="large" />
            </Flex>
            <Flex direction="column" gap={4} align="center">
              <Caption>With Text</Caption>
              <Spinner size="medium" text="Loading..." />
            </Flex>
          </Flex>
        </section>

        {/* Dividers */}
        <section style={{ marginBottom: '64px' }}>
          <Heading2 gutterBottom>Dividers</Heading2>
          <Divider spacing="large" />
          <Flex direction="column" gap={6}>
            <div>
              <Caption gutterBottom>Horizontal Divider</Caption>
              <Divider />
            </div>
            <div>
              <Caption gutterBottom>With Text</Caption>
              <Divider text="OR" />
            </div>
            <div>
              <Caption gutterBottom>Variants</Caption>
              <Divider variant="light" spacing="small" />
              <Divider variant="medium" spacing="small" />
              <Divider variant="dark" spacing="small" />
            </div>
          </Flex>
        </section>

      </Container>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Flex justify="center" align="center" direction="column" gap={4}>
            <Heading3 color="white">Glimmora Hotel</Heading3>
            <Body color="white" align="center">
              Experience luxury and comfort at its finest
            </Body>
            <Divider variant="light" />
            <Caption color="white">© 2024 Glimmora Hotel. All rights reserved.</Caption>
          </Flex>
        </Container>
      </footer>
    </div>
  );
}

export default App;
