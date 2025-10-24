import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => (
  <div className="w-full" style={{ 
    minHeight: '600px',
    background: 'linear-gradient(180deg, #E3EEFF 40%, #fff 100%)',
    padding: '60px 20px'
  }}>
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center space-y-6">
        <Skeleton className="h-16 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
        <Skeleton className="h-12 w-48 mx-auto" />
      </div>
    </div>
  </div>
);

export const FeaturesSkeleton = () => (
  <div className="w-full py-20 px-5">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-2/3 mx-auto mb-4" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const CTASkeleton = () => (
  <div className="w-full py-20 px-5 bg-muted">
    <div className="max-w-[800px] mx-auto text-center space-y-6">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-6 w-2/3 mx-auto" />
      <Skeleton className="h-12 w-48 mx-auto" />
    </div>
  </div>
);

export const StatisticsSkeleton = () => (
  <div className="w-full py-20 px-5">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="text-center space-y-3">
            <Skeleton className="h-16 w-32 mx-auto" />
            <Skeleton className="h-6 w-24 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TestimonialsSkeleton = () => (
  <div className="w-full py-20 px-5 bg-muted">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-2/3 mx-auto mb-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4 p-6 bg-background rounded-lg">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            <div className="flex items-center gap-3 mt-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
