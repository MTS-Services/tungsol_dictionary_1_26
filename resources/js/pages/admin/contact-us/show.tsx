import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { ArrowLeft, Edit } from 'lucide-react';

interface Contact {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
}

interface PageProps {
    contact: Contact;
}



const Show = ({ contact }: PageProps) => {
    return (
        <AdminLayout activeSlug="admin-inquiries">
            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Detail Word Definition</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={route('admin.cu.contact-us.index')}
                    >
                        Back
                    </ActionButton>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Contact Us Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="code">
                                        Name
                                    </Label>

                                    <p>{contact.name}</p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Email</Label>

                                    <p>{contact.email}</p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Subject</Label>

                                    <p>{contact.subject}</p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Message</Label>

                                    <p>{contact.message}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label className="text-sm text-muted-foreground">
                                        Received At
                                    </Label>
                                    <p className="text-sm font-medium">
                                        {new Date(
                                            contact.created_at,
                                        ).toLocaleString()}
                                    </p>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </AdminLayout>
    );
};

export default Show;
